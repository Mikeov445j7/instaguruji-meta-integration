import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MENU_DETAIL } from '../../../constant/list-of-menu-initial.data';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss']
})
export class FormsPage {
  @Input() type: string;
  menuListFormGroup: FormGroup = null;
  constructor(private _fB: FormBuilder) {
    //this.initForm();
  }

  ngOnChanges() {
    this.initForm();
  }

  initForm() {
    const items = this.getFormArray(this.type);
    this.menuListFormGroup = this._fB.group({
      items: items
    })
  }

  getFormArray(type: string): FormArray {
    const items = MENU_DETAIL[type];
    const formArrayItem: FormArray = this._fB.array([]);
    items.forEach(item => {
      const formGroupItem: FormGroup = this._fB.group({
        checked: new FormControl(false),
        name: new FormControl(item.name),
        kg: new FormControl(item.kg),
        gm: new FormControl(item.gm),
        qty: new FormControl(item.qty)
      });
      formArrayItem.push(formGroupItem);
    });
    return formArrayItem;
  }
}
