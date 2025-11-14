import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../service/api/home.service';
import { FADEINOUT } from '../../animations/fade-in-fade-out.animation';
import { CommonService } from '../../service/common.service';
import { getParamValueQueryString } from '../../functions/router.function';
import { AppService } from '../../service/app.service';
import { AdMob, AdMobPlugin, BannerAdPluginEvents } from '@capacitor-community/admob';
import { BANNER_ADD_OPTIONS } from '../../constant/admob-unit-ids';
import { PLATFORM_DEVICE } from 'src/app/constant/common.enum';
import { ENV } from 'src/environments/environment';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
  animations: [FADEINOUT],
})
export class BookPage {
  list: Array<any> = [];
  isSearchClicked: boolean = false;
  title: string = 'Loading...';
  adMobInstance: AdMobPlugin = AdMob;
  constructor(private _router: Router,
    private _homeService: HomeService,
    private _common: CommonService,
    private _appService: AppService) { }

  ionViewWillEnter() {
    this.showHideBanner();
    this.onLoadData();
  }

  onLoadData(event?: any) {
    let catId: number = getParamValueQueryString('catId');
    this._common.showLoader();
    this._homeService.GetBooks(catId).subscribe((result) => {
      this._common.hideLoader();
      this.list = result.data;
      this.title = result.data[0].cat_name;
    }, (err) => {
      this.list = [];
      this.title = 'NA';
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
    this._router.navigate(['category/chapter'], { queryParams: { catId: item.cat_id, bookId: item.id } });
  }

  onSearch() {
    this.isSearchClicked = !this.isSearchClicked;
  }

  async showHideBanner(flag: boolean = true): Promise<void> {
    if (ENV.platform == PLATFORM_DEVICE.ANDROID) {
      if (flag) {
        await this.adMobInstance.showBanner(BANNER_ADD_OPTIONS('book'));
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