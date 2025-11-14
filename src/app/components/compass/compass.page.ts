import { Component } from '@angular/core';
import { AdMob, AdMobPlugin, BannerAdPluginEvents } from '@capacitor-community/admob';
import { BANNER_ADD_OPTIONS } from '../../constant/admob-unit-ids';
import { Geolocation } from '@capacitor/geolocation';
import { Share } from '@capacitor/share';
import { PLATFORM_DEVICE } from 'src/app/constant/common.enum';
import { ENV } from 'src/environments/environment';

@Component({
  selector: 'app-compass',
  templateUrl: './compass.page.html',
  styleUrls: ['./compass.page.scss']
})
export class CompassPage {
  adMobInstance: AdMobPlugin = AdMob;
  isVisibleLocation: any;
  constructor() { }

  ionViewWillEnter() {
    this.requestMotionPermission();
    this.showHideBanner();
    this.checkLocationAccess();
    init();
  }

  async checkLocationAccess() {
    const checkLocation = await Geolocation.checkPermissions();
    if (checkLocation.location == 'granted') {
      this.isVisibleLocation = true;
    } else {
      this.isVisibleLocation = false;
    }
  }

  async requestMotionPermission() {
    if (ENV.platform === 'ios') {
      if (typeof DeviceMotionEvent !== 'undefined' && typeof (DeviceMotionEvent as any).requestPermission === 'function') {
        await (DeviceMotionEvent as any).requestPermission();
        this.buttonClick();
      } else {
        alert('OS: No requestPermission function .... moving on.');
      }
    }
  }

  buttonClick(): void {
    const startBtn: any = document.querySelector(".start-btn");
    startBtn.click()
  }

  async onShareLocation() {
    const location: any = await Geolocation.getCurrentPosition();
    await Share.share({
      title: 'Current Location',
      text: 'Current Location',
      url: `https://www.google.com/maps/search/?api=1&query=${location.coords.latitude},${location.coords.longitude}`,
      dialogTitle: 'Current Location',
    });
  }

  async showHideBanner(flag: boolean = true): Promise<void> {
    if (ENV.platform == PLATFORM_DEVICE.ANDROID) {
      if (flag) {
        await this.adMobInstance.showBanner(BANNER_ADD_OPTIONS('compass'));
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


function init() {
  const startBtn = document.querySelector(".start-btn");
  const isIOS =
    navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
    navigator.userAgent.match(/AppleWebKit/);
  startBtn.addEventListener("click", startCompass);
  navigator.geolocation.getCurrentPosition(locationHandler);

  if (!isIOS) {
    window.addEventListener("deviceorientationabsolute", handler, true);
  }
}

function startCompass() {
  const isIOS =
    navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
    navigator.userAgent.match(/AppleWebKit/);
  if (isIOS) {
    (DeviceOrientationEvent as any).requestPermission()
      .then((response) => {
        if (response === "granted") {
          window.addEventListener("deviceorientation", handler, true);
        } else {
          alert("has to be allowed!");
        }
      })
      .catch(() => alert("not supported"));
  }
}

function handler(e) {
  const compassCircle: any = document.querySelector(".compass-circle");
  const myPoint: any = document.querySelector(".my-point");
  const compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
  compassCircle.style.transform = `translate(-50%, -50%) rotate(${-compass}deg)`;

  // ±15 degree
  if (
    (pointDegree < Math.abs(compass) &&
      pointDegree + 15 > Math.abs(compass)) ||
    pointDegree > Math.abs(compass + 15) ||
    pointDegree < Math.abs(compass)
  ) {
    myPoint.style.opacity = 0;
  } else if (pointDegree) {
    myPoint.style.opacity = 1;
  }
}

let pointDegree;

function locationHandler(position) {
  const { latitude, longitude } = position.coords;
  pointDegree = calcDegreeToPoint(latitude, longitude);

  if (pointDegree < 0) {
    pointDegree = pointDegree + 360;
  }
}

function calcDegreeToPoint(latitude, longitude) {
  // Qibla geolocation
  const point = {
    lat: 21.422487,
    lng: 39.826206
  };

  const phiK = (point.lat * Math.PI) / 180.0;
  const lambdaK = (point.lng * Math.PI) / 180.0;
  const phi = (latitude * Math.PI) / 180.0;
  const lambda = (longitude * Math.PI) / 180.0;
  const psi =
    (180.0 / Math.PI) *
    Math.atan2(
      Math.sin(lambdaK - lambda),
      Math.cos(phi) * Math.tan(phiK) -
      Math.sin(phi) * Math.cos(lambdaK - lambda)
    );
  return Math.round(psi);
}