import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PanchangPageRoutingModule } from './panchang-routing.module';
import { PanchangPage } from './panchang.page';
import { MaterialModule } from '../../material.module';
import { PaanchWarPage } from './paanch-war/paanch-war.page';
import { DivBlockPage } from './div-block/div-block.page';
import { GrahTablePage } from './grah-table/grah-table.page';
import { PlanetTablePage } from './planet-table/planet-table.page';
import { CityModalPage } from './city-modal/city-modal.page';


import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
  NgxMatNativeDateModule
} from '@angular-material-components/datetime-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanchangPageRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule
  ],
  declarations: [
    PanchangPage,
    PaanchWarPage,
    DivBlockPage,
    GrahTablePage,
    PlanetTablePage,
    CityModalPage
  ]
})
export class PanchangPageModule { }
