import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JapmalaPage } from './japmala.page';

const routes: Routes = [
  { path: '', component: JapmalaPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JapmalaPageRoutingModule { }
