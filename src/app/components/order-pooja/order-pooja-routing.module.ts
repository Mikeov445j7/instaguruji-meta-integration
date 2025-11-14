import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderPoojaPage } from './order-pooja.page';

const routes: Routes = [
  { path: '', component: OrderPoojaPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPoojaPageRoutingModule { }
