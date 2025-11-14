import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SplashScreenPage } from './splash-screen.page';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterPageModule } from '../register/register.module';
const routes: Routes = [
  { path: '', component: SplashScreenPage }
];
const COMPONENT = [SplashScreenPage];
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    RegisterPageModule
  ],
  declarations: [
    ...COMPONENT
  ],
  exports: [
    ...COMPONENT,
    RouterModule
  ]
})
export class SplashScreenModule { }
