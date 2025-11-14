import { Component, OnInit, ViewChild } from '@angular/core';
import { AdMob, AdMobPlugin, BannerAdPluginEvents } from '@capacitor-community/admob';
import { PLATFORM_DEVICE } from '../../constant/common.enum';
import { ENV } from 'src/environments/environment';
import { BANNER_ADD_OPTIONS } from '../../constant/admob-unit-ids';
import { Geolocation } from '@capacitor/geolocation';
import { CityModalPage } from './city-modal/city-modal.page';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

declare function doForm(payload: PanchangForm): any;
declare function ib(size: number): any;

export interface PanchangForm {
  date: Date;
  longitude: string;
  latitude: string;
  place: string;
}

@Component({
  selector: 'app-panchang',
  templateUrl: './panchang.page.html',
  styleUrls: ['./panchang.page.scss']
})
export class PanchangPage {
  content: any = null;
  adMobInstance: AdMobPlugin = AdMob;
  dateLabel = new Date();
  coords = {} as any;
  calenderFormControl = new FormControl(new Date())
  @ViewChild('cityModal', { static: true }) cityModal: CityModalPage;


  @ViewChild('picker') picker: any;
  calenderConfig: any = {
    disabled: null,
    showSpinners: true,
    showSeconds: false,
    disableMinute: false,
    defaultTime: [new Date().getHours(), 0, 0],
    stepHour: 1,
    stepMinute: 1,
    stepSecond: 1,
    enableMeridian: true,
    hideTime: false,
    touchUi: true,
    color: 'primary'
  }

  ionViewWillEnter() {
    this.showHideBanner();
  }

  onDateChanges(event) {
    const datee = new Date(event.value);
    this.calenderFormControl.setValue(new Date(event.value));
    this.dateLabel = datee;
    this.getPanchang();
  }

  setLabelDate(value: number) {
    const currentDate = this.dateLabel;
    const getDate = this.dateLabel.getDate() + value;
    currentDate.setDate(getDate);
    this.dateLabel = new Date(currentDate);
    this.getPanchang();
  }

  getPanchang() {
    const date = this.dateLabel;
    const longitude = this.coords.longitude.toLocaleString();//"-73.935242";
    const latitude = this.coords.latitude.toLocaleString();//"40.730610";
    const place = this.coords.name.toLocaleString();
    const { json } = doForm({
      date,
      longitude,
      latitude,
      place
    });
    this.content = json;
    let width = screen.width;
    ib(width - 30);
  }

  async showHideBanner(flag: boolean = true): Promise<void> {
    if (ENV.platform == PLATFORM_DEVICE.ANDROID) {
      if (flag) {
        await this.adMobInstance.showBanner(BANNER_ADD_OPTIONS('panchang'));
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

  onCityInit(event) {
    this.coords = event;
    this.getPanchang();
  }

  onCitySearch() {
    this.cityModal.openModal();
  }

  getSelectedCity(coords) {
    this.coords = {
      latitude: coords.latitude,
      longitude: coords.longitude,
      name: coords.name
    }
    console.log(this.coords);
    this.getPanchang();
  }
}