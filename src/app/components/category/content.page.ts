import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../service/api/home.service';
import { CommonService } from '../../service/common.service';
import { getParamValueQueryString } from '../../functions/router.function';
import { AppService } from '../../service/app.service';
import { RangeCustomEvent, RangeValue } from '@ionic/core';
import { forkJoin } from 'rxjs';
import { AdMob, AdMobPlugin, BannerAdPluginEvents } from '@capacitor-community/admob';
import { BANNER_ADD_OPTIONS } from '../../constant/admob-unit-ids';
import { PLATFORM_DEVICE } from 'src/app/constant/common.enum';
import { ENV } from 'src/environments/environment';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss']
})
export class ContentPage implements OnInit {
  content: string = '';
  fontSize: RangeValue;
  title: string = 'Loading...';
  adMobInstance: AdMobPlugin = AdMob;

  constructor(private _router: Router,
    private _homeService: HomeService,
    private _common: CommonService,
    private _appService: AppService) { }

  ngOnInit() {
    this.fontSize = localStorage.getItem('contentFont') ?? 16 as any;
    this.onLoadData();
  }

  isElementOverflowing(element) {
    var overflowX = element.offsetWidth < element.scrollWidth,
      overflowY = element.offsetHeight < element.scrollHeight;
    return (overflowX || overflowY);
  }

  onLoadData(event?: any) {
    let catId: number = getParamValueQueryString('catId');
    let bookId: number = getParamValueQueryString('bookId');
    let chapterId: number = getParamValueQueryString('chapterId');
    this._common.showLoader();
    forkJoin([
      this._homeService.GetChapterById(catId, bookId, chapterId),
      this._homeService.GetContentById(catId, bookId, chapterId)
    ]).subscribe(([detail, content]) => {
      this.title = detail.data.name;
      this._common.hideLoader();
      this.content = content.data;
    }, (err) => {
      this.pullToRefreshComplete(event);
      this._common.hideLoader();
    }, () => {
      this.pullToRefreshComplete(event);
    });
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
    this._router.navigate(['category/content'], { queryParams: { catId: item.cat_id, bookId: item.id } });
  }

  onRangeChange(ev: Event) {
    this.fontSize = (ev as RangeCustomEvent).detail.value;
    localStorage.setItem('contentFont', `${this.fontSize}`);
  }

  ionViewWillEnter() {
    this.showHideBanner();
  }

  async showHideBanner(flag: boolean = true): Promise<void> {
    if (ENV.platform == PLATFORM_DEVICE.ANDROID) {
      if (flag) {
        await this.adMobInstance.showBanner(BANNER_ADD_OPTIONS('japmala'));
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