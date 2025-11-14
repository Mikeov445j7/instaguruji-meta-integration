import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PopoverPage } from './popover.page';

const COMPONENT = [PopoverPage];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    ...COMPONENT
  ],
  exports: [
    ...COMPONENT
  ]
})
export class PopoverModule { }
