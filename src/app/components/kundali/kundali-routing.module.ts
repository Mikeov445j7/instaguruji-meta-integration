import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KundaliPage } from './kundali.page';

const routes: Routes = [
  { path: '', component: KundaliPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KundaliPageRoutingModule { }
