import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../service/api/home.service';
import { CommonService } from '../../service/common.service';
import { AppService } from '../../service/app.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdMob, AdMobPlugin, BannerAdPluginEvents } from '@capacitor-community/admob';
import { BANNER_ADD_OPTIONS } from '../../constant/admob-unit-ids';
import { PLATFORM_DEVICE } from 'src/app/constant/common.enum';
import { ENV } from 'src/environments/environment';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-pooja.page.html',
  styleUrls: ['./order-pooja.page.scss']
})
export class OrderPoojaPage implements OnInit {
  list: Array<any> = [];
  formGroup: FormGroup;
  buttonConfig: { text: string, disable: boolean } = { text: 'Submit', disable: false };
  eventList = [
    { name: "Shodash sanskar / षोडश संस्कार " },
    { name: "Wedding / शुभविवाह" },
    { name: "Thread ceremony / उपनयन" },
    { name: "Samavartanam / समावर्तन" },
    { name: "Vastu Shanti / वास्तुशांती" },
    { name: "Janan Shanti / जनन शांती" },
    { name: "Navagrah Shanti / नवग्रह शांती" },
    { name: "Udak Shanti / उदक शांती" },
    { name: "Laghu Rudra / लघुरुद्र" },
    { name: " Industrial Pooja / व्यवसायिक पूजा" },
    { name: "Vayovastha Shanti / वयोवस्थ शांती" },
    { name: "Grih Pravesh / गृहप्रवेश" },
    { name: "Bhoomi Pujan / भूमी पूजन" },
    { name: "Laghu Rudra / लघुरुद्र" },
    { name: " Maha Rudra / महारुद्र" },
    { name: "Ganesh Yaag / गणेश याग" },
    { name: "Navchandi / नवचंडी " },
    { name: "Shatchandi / शतचंडी " },
    { name: "Sudarshan Yaag / सुदर्शन याग " },
    { name: "Moorti Pranpratishtha / मुर्ती प्राणप्रतिष्ठा" },
    { name: "Saptashati Path / सप्तशती पाठ" },
    { name: "Jaap/ Anushthan / जप / अनुष्ठान" },
    { name: "Kumbh / Arka Vivah / कुंभ / अर्क विवाह" },
    { name: "Shraddha/ श्राद्ध" },
    { name: "Horoscope / जन्मपत्रिका" },
    { name: "Online Pooja / संगणक पूजा" },
    { name: "Numerology / अंकशास्त्र" },
    { name: "Tarot / टॅरोट" },
    { name: "Gems / रत्न " },
    { name: "Astrology / ज्योतिष" },
    { name: "Vastu Shastra / वास्तुशास्त्र" }
  ];
  adMobInstance: AdMobPlugin = AdMob;
  constructor(private _router: Router,
    private _homeService: HomeService,
    private _fB: FormBuilder,
    private _common: CommonService,
    private _appService: AppService) { }

  ngOnInit() {
    this.formGroup = this.getFormGroup();
    this.eventList.forEach(() => {
      (this.formGroup.controls.Events as FormArray).push(new FormControl(false));
    });
    //this.popupFormData();
  }

  popupFormData() {
    this.formGroup.patchValue({
      FirstName: "Sanoj",
      LastName: "Vishwakarma",
      MobileNo: "9029736885",
      Address: "Dombivli",
    })
  }

  ionViewWillEnter() {
    this.showHideBanner();
  }

  getFormGroup() {
    let tmp;
    tmp = this._fB.group({
      id: new FormControl(''),
      FirstName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      LastName: new FormControl(null),
      MobileNo: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.pattern(/^[6-9]\d{9}$/)]),
      Address: new FormControl(null),
      Events: new FormArray([])
    });
    return tmp;
  }

  onSubmit() {
    this.buttonConfig = { text: 'Please wait...', disable: true };
    const f = this.formGroup.getRawValue();
    const selectedEventIds = f.Events
      .map((checked, i) => checked ? this.eventList[i].name : null)
      .filter(v => v !== null);
    const form = {
      id: f.id,
      FirstName: f.FirstName,
      LastName: f.LastName,
      MobileNo: f.MobileNo,
      Address: f.Address,
      Items: selectedEventIds.toString()
    }

    let fd = new FormData();
    fd.append("data", JSON.stringify(form));
    this._homeService.OrderPoojaInsert(fd).subscribe((r: any) => {
      this.buttonConfig = { text: 'Submit', disable: false };
      this._common.showToast(r.message);
      if (r.status == 200) {
        this.formReset();
      }
    }, (e) => {
      this.buttonConfig = { text: 'Submit', disable: false };
    })
  }

  formReset() {
    this.formGroup.reset();
    this.formGroup.patchValue({
      id: ''
    })
  }

  async showHideBanner(flag: boolean = true): Promise<void> {
    if (ENV.platform == PLATFORM_DEVICE.ANDROID) {
      if (flag) {
        await this.adMobInstance.showBanner(BANNER_ADD_OPTIONS('order'));
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