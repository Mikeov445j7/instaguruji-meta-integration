import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MENU_DETAIL } from '../../constant/list-of-menu-initial.data';
import { CommonService } from '../../service/common.service';
import { ENV } from '../../../environments/environment';
import { Share } from '@capacitor/share';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { LOGO_BASE64_STRING } from '../../constant/base64.string';
import { AdMob, AdMobPlugin, BannerAdPluginEvents } from '@capacitor-community/admob';
import { BANNER_ADD_OPTIONS } from '../../constant/admob-unit-ids';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { PLATFORM_DEVICE } from 'src/app/constant/common.enum';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.page.html',
  styleUrls: ['./list-menu.page.scss']
})
export class ListMenuPage {
  buttonConfig: { text: string, disable: boolean } = { text: 'Submit', disable: false };
  menuList = MENU_DETAIL;
  formsArray: FormArray;
  listMenuForm: FormGroup;
  adMobInstance: AdMobPlugin = AdMob;
  constructor(
    private _fB: FormBuilder,
    private _common: CommonService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.listMenuForm = this._fB.group({
      name: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.pattern(/^[6-9]\d{9}$/)]),
      details: this._fB.array([])
    });
    this.addIntoArray();
  }

  addIntoArray(): void {
    const formDetails = this.listMenuForm.controls['details'] as FormArray;
    MENU_DETAIL.forEach((item) => {
      const formGroup = this._fB.group({
        name: new FormControl(item.name),
        kg: new FormControl(null),
        gm: new FormControl(null),
        qty: new FormControl(null),
        checked: new FormControl(false)
      });
      formDetails.push(formGroup);
    });
  }

  public get detailsControls(): FormArray {
    return this.listMenuForm.get('details') as FormArray;
  }

  ionViewWillEnter() {
    this.showHideBanner();
    this.createForm();
  }

  identify(index) {
    return index;
  }

  onSubmit() {
    const arr = this.listMenuForm.get('details').value.filter(f => f.checked);
    if (arr.length > 0) {
      this.buttonConfig = { text: 'Please wait...', disable: true };
      const content = this.makeContent(arr);
      this.pdfDownload(content);
    } else {
      this._common.showToast("No data selected!!");
    }
  }


  makeContent(arr: any[]) {
    const items = [];
    arr.forEach((item: any, i: number) => {
      items.push([`${i + 1}. `, item.name, item.gm || 0, item.kg || 0, item.qty || 0]);
    });
    return items;
  }

  pdfObj = null;
  pdfDownload(content: any[]) {
    pdfMake.fonts = {
      TiroDevanagariHindi: {
        regular: `${window.location.origin}/assets/fonts/TiroDevanagariHindi-Regular.ttf`,
        bold: `${window.location.origin}/assets/fonts/TiroDevanagariHindi-Regular.ttf`,
        normal: `${window.location.origin}/assets/fonts/TiroDevanagariHindi-Regular.ttf`,
        italics: `${window.location.origin}/assets/fonts/TiroDevanagariHindi-Italic.ttf`,
      },
      TiroDevanagariMarathi: {
        regular: `${window.location.origin}/assets/fonts/TiroDevanagariMarathi-Regular.ttf`,
        bold: `${window.location.origin}/assets/fonts/TiroDevanagariMarathi-Regular.ttf`,
        normal: `${window.location.origin}/assets/fonts/TiroDevanagariMarathi-Regular.ttf`,
        italics: `${window.location.origin}/assets/fonts/TiroDevanagariMarathi-Italic.ttf`,
      },
      TiroDevanagariSanskrit: {
        regular: `${window.location.origin}/assets/fonts/TiroDevanagariSanskrit-Regular.ttf`,
        bold: `${window.location.origin}/assets/fonts/TiroDevanagariSanskrit-Regular.ttf`,
        normal: `${window.location.origin}/assets/fonts/TiroDevanagariSanskrit-Regular.ttf`,
        italics: `${window.location.origin}/assets/fonts/TiroDevanagariSanskrit-Italic.ttf`,
      }
    };
    const form = this.listMenuForm.getRawValue();
    const docDef = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      pageMargins: [30, 10, 40, 60],
      content: [
        {
          image: LOGO_BASE64_STRING,
          width: 180,
          height: 140,
          alignment: 'center'
        },
        { text: 'List Of Menus\n\n', style: 'header' },
        { text: 'Guruji Name: ' + form.name + '\n' },
        { text: 'Mobile No.: ' + form.mobile + '\n\n' },
        {
          style: 'tableExample',
          table: {
            widths: [35, '*', 50, 50, 50],
            body: [
              ['Sr No.', 'Name', 'Gm', 'Kg', 'Quantity'],
              ...content
            ]
          }
        },
      ],
      styles: {
        header: {
          bold: true,
          fontSize: 18
        },
        subheader: {
          fontSize: 15,
          bold: true
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        }
      },
      defaultStyle: {
        fontSize: 12,
        font: 'TiroDevanagariHindi'
      }
    }

    const _that = this;
    pdfMake.createPdf(docDef).getBase64(function (base64) {
      const fileName = "List of Menu.pdf";
      Filesystem.writeFile({
        path: fileName,
        data: base64,
        directory: Directory.Cache
      })
        .then(() => {
          return Filesystem.getUri({
            directory: Directory.Cache,
            path: fileName
          });
        })
        .then((uriResult) => {
          _that.buttonConfig = { text: 'Submit', disable: false };
          Share.share({
            title: fileName,
            text: fileName,
            url: uriResult.uri,
          });
        });
    });
  }

  async showHideBanner(flag: boolean = true): Promise<void> {
    if (ENV.platform == PLATFORM_DEVICE.ANDROID) {
      if (flag) {
        await this.adMobInstance.showBanner(BANNER_ADD_OPTIONS('list_menu'));
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