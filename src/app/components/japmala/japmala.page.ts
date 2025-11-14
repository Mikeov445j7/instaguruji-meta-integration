import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlertController, IonicSlides } from '@ionic/angular';
import { Haptics } from '@capacitor/haptics';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-japmala',
  templateUrl: './japmala.page.html',
  styleUrls: ['./japmala.page.scss']
})
export class JapmalaPage {
  display = {
    mala_count: 0,
    bead_count: 0,
  };


  public swiperModules = [IonicSlides];
  @ViewChild('swiper', { static: true }) swiperInstance;

  constructor(private alertController: AlertController) { }

  ionViewWillEnter() {
    this.display.bead_count = 0;
    this.display.mala_count = 0;
  }

  onSlideLoad(e) {
    const { swiper } = this.swiperInstance.nativeElement;
    if (swiper) {
      let currentIndex = swiper.activeIndex;
      swiper.slideTo(currentIndex, 0);
    }
    this.display.bead_count = 0;
    this.display.mala_count = 0;
  }

  onSlideNextEnd(event) {
    const currentCount = this.display.bead_count;
    const counter = currentCount + 1;
    const malaCount = counter / 108;
    this.display.bead_count = counter;
    this.display.mala_count = Math.floor(malaCount);
    this.hapticsVibrate();
  }

  hapticsVibrate = async () => {
    await Haptics.vibrate();
  };

  async onResetClick() {
    const alert = await this.alertController.create({
      header: 'Are you sure want to reset the bead count?',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Yes',
          role: 'confirm'
        }
      ]
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
    if (role == 'confirm') {
      this.display.bead_count = 0;
      this.display.mala_count = 0;
      const { swiper } = this.swiperInstance.nativeElement;
      if (swiper) {
        swiper.slideTo(0, 0);
      }

    }
  }
}