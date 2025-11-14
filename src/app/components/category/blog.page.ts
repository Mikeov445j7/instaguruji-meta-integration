import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../service/api/home.service';
import { FADEINOUT } from '../../animations/fade-in-fade-out.animation';
import { CommonService } from '../../service/common.service';
import { AppService } from '../../service/app.service';
import { AdMob, AdMobPlugin, BannerAdPluginEvents } from '@capacitor-community/admob';
import { BANNER_ADD_OPTIONS } from '../../constant/admob-unit-ids';
import { ENV } from 'src/environments/environment';
import { PLATFORM_DEVICE } from 'src/app/constant/common.enum';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
  animations: [FADEINOUT]
})
export class BlogPage {
  list: Array<any> = [];
  isSearchClicked: boolean = false;
  title: string = 'लेख व अद्यतन';
  adMobInstance: AdMobPlugin = AdMob;
  constructor(private _router: Router,
    private _homeService: HomeService,
    private _common: CommonService,
    private _appService: AppService) { }

  ngOnInit() {
    this.showHideBanner();
    this.onLoadData();
  }

  onLoadData(event?: any) {
    this._common.showLoader();
    this._homeService.BlogAll().subscribe((result) => {
      this._common.hideLoader();
      this.list = result.data;
    }, (err) => {
      this.list = [];
      this.pullToRefreshComplete(event);
      this._common.hideLoader();
    }, () => {
      this.pullToRefreshComplete(event);
    })
  }

  onRefresh(event: any) {
    this.onLoadData(event);
  }

  pullToRefreshComplete(event: any) {
    if (event) {
      event.target.complete();
    }
  }

  onClick(item: any) {
    this._router.navigate(['category/blog/content'], { queryParams: { blogId: item.id } });
  }

  onSearch() {
    this.isSearchClicked = !this.isSearchClicked;
  }

  async showHideBanner(flag: boolean = true): Promise<void> {
    if (ENV.platform == PLATFORM_DEVICE.ANDROID) {
      if (flag) {
        await this.adMobInstance.showBanner(BANNER_ADD_OPTIONS('blog'));
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