import { Component } from '@angular/core';
import { AdMob, AdMobPlugin, BannerAdPluginEvents } from '@capacitor-community/admob';
import { PLATFORM_DEVICE } from 'src/app/constant/common.enum';
import { ENV } from 'src/environments/environment';
import { BANNER_ADD_OPTIONS } from '../../constant/admob-unit-ids';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutPage {
  content: string = `Mr. Sandesh Subhash Kulkarni did his schooling from Maharaja Sayajirao Vidyalaya, Satara. He completed his college in Science Stream. He has completed studies acquired knowledge from various masters (Gurus) in ‘Yaadnyiki ', ‘Yajurveda Samhita’ Astrology for many years. He is educated in the field of all puja vidhi and has completed most of his education at home by the able guidance of his ancestors. Due to his selfless service, he has been associated with many high-profile families in Maharashtra. Guruji has also featured in various serials and devotional songs albums.<br/><br/>
  Many industrial houses refer to Guruji’s guidance on issues pertaining to performing Pujas and have gain mental satisfaction and peace of mind. Sandesh Guruji is the inspiration and backbone of this Application. Guruji started offering services as a “Hindu Priest” on a full-time freelance basis from year 2001 onwards.  In last more than 20 years, he has officiated / performed / conducted various assignments of ‘Pourohitya’ Services', for various clients, to their entire satisfaction.  He has visited many regions of India for officiating different Hindu rituals. Due to his humble nature and down to earth attitude, he has been well received in all sections of the society.<br/><br/>
  He has performed puja ceremony for many famous people which include Musicians, Film Director's, Actor's, Industrialist, Builder’s, Politician etc. Many people have approached and got well-being, peace of mind, and right guidance for various Pujas/rituals through Guruji. He has hailed from a great ancestral Brahmin Priest lineage who are well-versed in vedic studies, and have devoted their life for service of God and humanity. He has learnt and lived in the rich vedic environment and has learnt various traditions and rituals from their ancestors as well. As a Hindu Priest, he would be interested in delivering excellent services according to Vedic Sanatana Dharma to all Hindu people their families for their welfare.<br/><br/>
  Guruji can perform officiate all Hindu ritual including Puja, Shodash Sanskars, Marriage, {Destination wedding}, Thread Ceremony, Samavartanam, Vastu Shanti, Janan Shanti, Navgrah Shanti, Udak Shanti, Industrial puja, Vayovastha Shanti, Grih Pravesh, Bhumi Pujan, Laghu Rudra, Maha Rudra, Ganesh Yaag, Nav Chandi Homam, Shat Chandi Homam, Sudarshan Yaag, Murti Pranpratishtha, Saptashati Paath, Jaap / Anushthan, Kumbh Vivah, Pitar Shraddha, etc.  He can explain the entire ritual in English, Marathi and Hindi. Preparation of Horoscopes ‘Gun Melan’ (matching of horoscopes of Bride Bridegroom with each other) for marriage purpose can also be arranged. With the help of the advance technology, Guruji has arrived with latest ideas viz. “On-Line Puja”.   On-Line Puja could be easily performed through web camera, on Google Hangouts, Skype, Messenger, etc. This is a small effort by the intention of reaching the world of knowledge and spirituality.
  Numerology, Tarot, Ritual, Gems, Astrology all in one roof. Guruji is accessible for any consultation and discussion through prior appointment, be assured of satisfaction. Please call on any of the mobile numbers below for appointment`;
  adMobInstance: AdMobPlugin = AdMob;
  constructor() { }

  ionViewWillEnter() {
    this.showHideBanner();
  }

  facebookClick() {
    window.open('https://www.facebook.com/instagurujisandeshkulkarni/', '_system');
  }

  instagramClick() {
    window.open('https://www.instagram.com/sandeshskulkarni', '_system');
  }

  whatsappClick() {
    window.open('https://wa.me/+919022943590', '_system');
  }

  async showHideBanner(flag: boolean = true): Promise<void> {
    if (ENV.platform == PLATFORM_DEVICE.ANDROID) {
      if (flag) {
        await this.adMobInstance.showBanner(BANNER_ADD_OPTIONS('about'));
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