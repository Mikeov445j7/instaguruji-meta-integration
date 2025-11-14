import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListMenuPageRoutingModule } from './list-menu-routing.module';
import { ListMenuPage } from './list-menu.page';
import { MaterialModule } from '../../material.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMenuPageRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ListMenuPage]
})
export class ListMenuPageModule { }
