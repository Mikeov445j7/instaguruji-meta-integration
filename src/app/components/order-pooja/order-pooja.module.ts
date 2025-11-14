import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderPoojaPageRoutingModule } from './order-pooja-routing.module';
import { OrderPoojaPage } from './order-pooja.page';
import { MaterialModule } from '../../material.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderPoojaPageRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  declarations: [OrderPoojaPage]
})
export class OrderPoojaPageModule { }
