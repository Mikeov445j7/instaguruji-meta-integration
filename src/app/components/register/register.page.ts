import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Device } from '@capacitor/device';
import { HomeService } from '../../service/api/home.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  registerForm: FormGroup = null;
  buttonConfig: { text: string, disable: boolean } = { text: 'Submit', disable: false };
  uuid: string = null;
  constructor(private _fB: FormBuilder,
    private _homeService: HomeService,
    private _platform: Platform,
    private _router: Router) {
  }

  async ngOnInit() {
    const { identifier } = await Device.getId();
    this.uuid = identifier;
    this.createForm();
  }

  createForm() {
    let mobileValidator = [Validators.required, Validators.minLength(10), Validators.pattern(/^[6-9]\d{9}$/)];
    let cityValidator = [Validators.required];
    if (this._platform.is('ios')) {
      mobileValidator = [Validators.minLength(10), Validators.pattern(/^[6-9]\d{9}$/)];
      cityValidator = [];
    }
    this.registerForm = this._fB.group({
      id: new FormControl(''),
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email]),
      mobile: new FormControl(null, mobileValidator),
      city: new FormControl(null, cityValidator),
      uuid: new FormControl(this.uuid)
    });
  }

  onSubmit() {
    this.buttonConfig = { text: 'Please wait...', disable: true };
    const formValue = this.registerForm.getRawValue();
    formValue.mobile = formValue.mobile ?? 'XXXXXXXXXX';
    formValue.city = formValue.city ?? 'XXXXXXXXXX';
    this._homeService.RegisterInsert(formValue).subscribe((r: any) => {
      this.buttonConfig = { text: 'Submit', disable: false };
      if (r.status == 200) {
        this.formReset();
        this.setRegister();
      }
    }, (e) => {
      this.buttonConfig = { text: 'Submit', disable: false };
    })
  }

  setRegister() {
    localStorage.setItem('register', '1');
    this._router.navigate(['category']);
  }

  formReset() {
    this.registerForm.reset();
    this.registerForm.patchValue({
      id: '',
      uuid: this.uuid
    })
  }
}

//source=$(readlink -f "${source}")"