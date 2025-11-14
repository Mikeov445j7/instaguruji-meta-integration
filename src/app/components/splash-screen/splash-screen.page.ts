import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import {
  PushNotifications
} from '@capacitor/push-notifications';
import { FCM } from "@capacitor-community/fcm";
import { Geolocation } from '@capacitor/geolocation';
import { PLATFORM_DEVICE } from 'src/app/constant/common.enum';
import { ENV } from 'src/environments/environment';
import { BANNER_ADD_OPTIONS } from 'src/app/constant/admob-unit-ids';
import { AdMob, AdMobPlugin, BannerAdPluginEvents } from '@capacitor-community/admob';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss']
})
export class SplashScreenPage {
  showRegisterForm: boolean = false;
  adMobInstance: AdMobPlugin = AdMob;
  constructor(public _router: Router) {
  }

  async ionViewWillEnter() {
    this.showHideBanner();
    this.redirectPageConfig();
    const isPushNotificationsAvailable = Capacitor.isPluginAvailable('PushNotifications');
    if (isPushNotificationsAvailable) {
      this.setupNotification();
    }
    this.requestGeoLocationPermitionInit();
  }

  redirectPageConfig() {
    const _that = this;
    setTimeout(() => {
      if (_that.getRegister()) {
        this.showRegisterForm = false;
        _that._router.navigate(['category']);
      } else {
        this.showRegisterForm = true;
      }
    }, 5000);
  }

  getRegister() {
    return localStorage.getItem('register') ?? 0;
    //return 1;
  }

  setupNotification() {
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === 'granted') {
        PushNotifications.register();
      }
    });

    FCM.subscribeTo({ topic: "news" })
      .then((r) => console.log(`subscribed to topic`))
      .catch((err) => console.log(err));
  }

  async requestGeoLocationPermitionInit() {
    await Geolocation.requestPermissions().then(result => {
      console.log("Get Permission");
    }).catch(error => {
      console.log("Denied Permission");
    })
  }

  printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', coordinates);
  };

  async showHideBanner(flag: boolean = true): Promise<void> {
    if (ENV.platform == PLATFORM_DEVICE.ANDROID) {
      if (flag) {
        await this.adMobInstance.showBanner(BANNER_ADD_OPTIONS('splash'));
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