import { Component, OnInit } from '@angular/core';
import { ENV } from '../../../environments/environment';
import { HomeService } from '../../service/api/home.service';
import { AdMob, AdMobPlugin, BannerAdPluginEvents } from '@capacitor-community/admob';
import { BANNER_ADD_OPTIONS } from '../../constant/admob-unit-ids';
import { PLATFORM_DEVICE } from 'src/app/constant/common.enum';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss']
})
export class GalleryPage implements OnInit {
  List: { name: string, url: string }[] = [];
  adMobInstance: AdMobPlugin = AdMob;
  loader = 0;
  selectedImage: { name: string, url: string } = null;
  constructor(
    private _homeService: HomeService) {
  }

  ngOnInit() {
    this.onLoadData();
  }

  ionViewWillEnter() {
    this.showHideBanner();
  }

  onLoadData() {
    this._homeService.GalleryAll().subscribe((res: any) => {
      this.loader = res.data.length == 0 ? -1 : 1;
      this.List = this.transformData(res.data);
    });
  }

  transformData(d: string[]): { name: string, url: string }[] {
    const tmp = [];
    d.forEach((item: string) => {
      tmp.push({
        name: item.split('/').pop().split('.').slice(0, -1).join('.'),
        url: ENV.origin_1 + item
      })
    })
    return tmp;
  }

  onImageClick(o: { name: string, url: string }) {
    this.selectedImage = o;
  }

  onCloseImage() {
    this.selectedImage = null;
  }

  async showHideBanner(flag: boolean = true): Promise<void> {
    if (ENV.platform == PLATFORM_DEVICE.ANDROID) {
      if (flag) {
        await this.adMobInstance.showBanner(BANNER_ADD_OPTIONS('gallery'));
        this.adMobInstance.addListener(BannerAdPluginEvents.Loaded, () => {
          this.adMobInstance.resumeBanner();
        })
      } else {
        await this.adMobInstance.hideBanner();
      }
    }
  }

  ionViewWillLeave() {
    this.showHideBanner(false);
  }
}