import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    // loadChildren: () => import('../../components/category/category.module').then(m => m.CategoryPageModule)
    children: [
      {
        path: '',
        loadChildren: () => import('../../components/category/category.module').then(m => m.CategoryPageModule)
      },
      {
        path: 'order-pooja',
        loadChildren: () => import('../../components/order-pooja/order-pooja.module').then(m => m.OrderPoojaPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
