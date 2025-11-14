import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AdMob } from '@capacitor-community/admob';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';
import { KeepAwake } from '@capacitor-community/keep-awake';
import { PrivacyScreen } from '@capacitor-community/privacy-screen';
import { NetworkService } from './service/network.service';
import { PLATFORM_DEVICE } from './constant/common.enum';
import { ENV } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { name: 'Home', title: 'Home', url: '/category' },
    { name: 'information-circle', title: 'About', url: '/about' },
    { name: 'cart', title: 'Order Pooja', url: '/order-pooja' },
    { name: 'flower', title: 'Kundali', url: '/kundali' },
    { name: 'list', title: 'List Of Menus', url: '/list-menu' },
    { name: 'card', title: 'Online Payment', url: '/payment' },
    { name: 'infinite', title: 'Japmala', url: '/japmala' },
    { name: 'compass', title: 'Compass', url: '/compass' },
    { name: 'hand-right', title: 'Panchang', url: '/panchang' },
    { name: 'image', title: 'Gallery', url: '/gallery' },
    { name: 'radio', title: 'Manoranjan', url: '/manoranjan' },
    { name: 'logo-youtube', title: 'Youtube', url: '/youtube' }
  ];
  isSideMenuVisible: boolean = false;
  isNetAvailable = true;
  constructor(
    private _platform: Platform,
    private _router: Router,
    private _network: NetworkService
  ) {
    this.callNetwork();
    this.initializeApp();
    this._router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.isSideMenuVisible = !(event.url.indexOf('splash') !== -1 || event.url.indexOf('register') !== -1);
      }
    })
  }

  callNetwork() {
    this._network.initNetwork();
    this._network.getConnectedStatus.subscribe((value: boolean) => {
      this.isNetAvailable = value;
    })
  }

  initializeApp() {
    App.addListener('backButton', () => {
      this._router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
          if (event.url.indexOf('/splash') != -1) {
            App.exitApp();
          }
        }
      });
    });
    this._platform.pause.subscribe(async () => { });
    this._platform.ready().then(() => {
      this.detectPlatform();
      this._router.navigateByUrl('panchang');
      //this._router.navigateByUrl('gallery');
      //this._router.navigate(['category/content'], { queryParams: { catId: 9, bookId: 69, chapterId: 801 } });
    });
  }

  async initializeAdds() {
    const { status } = await AdMob.trackingAuthorizationStatus();
    if (status === 'notDetermined') { }

    AdMob.initialize({
      requestTrackingAuthorization: true,
      testingDevices: ["2077ef9a63d2b398840261c8221a0c9b"],
    });
  }

  async intializeScreenAwake() {
    try {
      await KeepAwake.keepAwake();
      await PrivacyScreen.enable();
    } catch (e) {
      console.log('Screen Awake & Privacy screen not working in web');
    }
  }

  onRedirect(url: string) {
    if (url === '/manoranjan') {
      window.open('http://radio.garden/', '_system');
    } else {
      this._router.navigate([url]);
    }
  }

  detectPlatform(): void {
    if (this._platform.is('android')) {
      ENV.platform = PLATFORM_DEVICE.ANDROID;
      this.initializeAdds();
      this.intializeScreenAwake();
    } else if (this._platform.is('ios')) {
      ENV.platform = PLATFORM_DEVICE.IOS;
      this.intializeScreenAwake();
    } else {
      console.log('The platform is not supported');
    }
  }
}
