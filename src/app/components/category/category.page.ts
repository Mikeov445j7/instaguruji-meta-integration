import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../service/api/home.service';
import { FADEINOUT } from '../../animations/fade-in-fade-out.animation';
import { CommonService } from '../../service/common.service';
import { AppService } from '../../service/app.service';
import { Share } from '@capacitor/share';
import { AdMob, AdMobPlugin, BannerAdPluginEvents } from '@capacitor-community/admob';
import { BANNER_ADD_OPTIONS } from '../../constant/admob-unit-ids';
import { PLATFORM_DEVICE } from 'src/app/constant/common.enum';
import { ENV } from 'src/environments/environment';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
  animations: [FADEINOUT],
})
export class CategoryPage {
  list: Array<any> = [];
  isSearchClicked: boolean = false;
  adMobInstance: AdMobPlugin = AdMob;
  constructor(
    private _router: Router,
    private _homeService: HomeService,
    private _common: CommonService,
    private _appService: AppService) { }

  ionViewWillEnter() {
    this.showHideBanner();
    this.onLoadData();
  }

  isOverflown = ({ clientWidth, clientHeight, scrollWidth, scrollHeight }) => {
    return scrollHeight > clientHeight || scrollWidth > clientWidth;
  }

  isEllipsisActive(element) {
    var tolerance = 2; // In px. Depends on the font you are using
    return element.offsetHeight < element.scrollHeight ||
      element.offsetWidth < element.scrollWidth;
  };

  onLoadData(event?: any) {
    this._common.showLoader();
    this._homeService.GetCategories().subscribe((result) => {
      this._common.hideLoader();
      this.list = result.data;
    }, (err) => {
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
    if (item.id === 101) {
      this._router.navigate(['category/blog'], { queryParams: { catId: item.id } });
    } else {
      this._router.navigate(['category/book'], { queryParams: { catId: item.id } });
    }

  }

  onSearch() {
    this.isSearchClicked = !this.isSearchClicked;
  }

  async onShare() {
    await Share.share({
      title: 'InstaGuruji App',
      text: 'InstaGuruji App',
      url: 'https://play.google.com/store/apps/details?id=com.indiakhel.dharmik&hl=en_IN',
      dialogTitle: 'InstaGuruji App',
    });
  }

  isElementOverflowing(element) {
    var overflowX = element.scrollWidth < element.clientWidth,
      overflowY = element.offsetHeight < element.scrollHeight;

    return (overflowX || overflowY);
  }

  wrapContentsInMarquee(element) {
    var marquee = document.createElement('marquee'),
      contents = element.innerText;

    marquee.innerText = contents;
    element.innerHTML = '';
    element.appendChild(marquee);
  }

  async showHideBanner(flag: boolean = true): Promise<void> {
    if (ENV.platform == PLATFORM_DEVICE.ANDROID) {
      if (flag) {
        await this.adMobInstance.showBanner(BANNER_ADD_OPTIONS('category'));
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