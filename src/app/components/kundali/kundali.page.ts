import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../service/common.service';
import { HomeService } from '../../service/api/home.service';
import { AdMob, AdMobPlugin, BannerAdPluginEvents } from '@capacitor-community/admob';
import { BANNER_ADD_OPTIONS } from '../../constant/admob-unit-ids';
import { PLATFORM_DEVICE } from 'src/app/constant/common.enum';
import { ENV } from 'src/environments/environment';

@Component({
  selector: 'app-kundali',
  templateUrl: './kundali.page.html',
  styleUrls: ['./kundali.page.scss']
})
export class KundaliPage {
  kundaliForm: FormGroup = null;
  buttonConfig: { text: string, disable: boolean } = { text: 'Submit', disable: false };
  adMobInstance: AdMobPlugin = AdMob;
  constructor(private _fB: FormBuilder,
    private _common: CommonService,
    private _homeService: HomeService) { }

  ngOnInit() {
    this.createForm();
  }

  ionViewWillEnter() {
    this.showHideBanner();
  }

  createForm() {
    this.kundaliForm = this._fB.group({
      id: new FormControl(''),
      name: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.pattern(/^[6-9]\d{9}$/)]),
      gender: new FormControl(null, [Validators.required]),
      dob: new FormControl({ value: null, disable: true }, [Validators.required]),
      tob: new FormControl('00:00'),
      pob: new FormControl(null, [Validators.required]),
      fatherName: new FormControl(null, [Validators.required]),
      motherName: new FormControl(null, [Validators.required]),
      language: new FormControl('Marathi', [Validators.required])
    })
    //this.populate();
  }

  populate() {
    this.kundaliForm.patchValue({
      name: "Domblivali",
      mobile: "9029736775",
      gender: "Male",
      dob: new Date(),
      tob: '00:00',
      pob: 'Domblivali',
      fatherName: 'Domblivali',
      motherName: 'Domblivali',
      language: 'English'
    })
  }

  onSubmit() {
    this.buttonConfig = { text: 'Please wait...', disable: true };
    const formValue = this.kundaliForm.getRawValue();
    let fd = new FormData();
    fd.append("data", JSON.stringify(formValue));
    this._homeService.KundaliInsert(fd).subscribe((r: any) => {
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
    this.kundaliForm.reset();
    this.kundaliForm.patchValue({
      id: '',
      tob: '00:00',
      language: 'Marathi'
    })
  }

  async showHideBanner(flag: boolean = true): Promise<void> {
    if (ENV.platform == PLATFORM_DEVICE.ANDROID) {
      if (flag) {
        await this.adMobInstance.showBanner(BANNER_ADD_OPTIONS('kundali'));
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