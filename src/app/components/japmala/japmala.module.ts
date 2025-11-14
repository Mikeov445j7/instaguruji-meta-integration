import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { JapmalaPageRoutingModule } from './japmala-routing.module';
import { JapmalaPage } from './japmala.page';
import { MaterialModule } from '../../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JapmalaPageRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [JapmalaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JapmalaPageModule { }
