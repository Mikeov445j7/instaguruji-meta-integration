import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppCustomPreloader } from './custom-preloader';

const routes: Routes = [
  {
    path: 'splash',
    loadChildren: () => import('./components/splash-screen/splash-screen.module').then(m => m.SplashScreenModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./components/category/category.module').then(m => m.CategoryPageModule)
  },
  {
    path: 'order-pooja',
    loadChildren: () => import('./components/order-pooja/order-pooja.module').then(m => m.OrderPoojaPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./components/about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'kundali',
    loadChildren: () => import('./components/kundali/kundali.module').then(m => m.KundaliPageModule)
  },
  {
    path: 'list-menu',
    loadChildren: () => import('./components/list-menu/list-menu.module').then(m => m.ListMenuPageModule),
    data: { preload: true }
  },
  {
    path: 'payment',
    loadChildren: () => import('./components/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'japmala',
    loadChildren: () => import('./components/japmala/japmala.module').then(m => m.JapmalaPageModule)
  },
  {
    path: 'compass',
    loadChildren: () => import('./components/compass/compass.module').then(m => m.CompassPageModule)
  },
  {
    path: 'panchang',
    loadChildren: () => import('./components/panchang/panchang.module').then(m => m.PanchangPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./components/gallery/gallery.module').then(m => m.GalleryPageModule)
  },
  {
    path: 'youtube',
    loadChildren: () => import('./components/youtube/youtube.module').then(m => m.YoutubePageModule)
  },
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./components/tabs/tabs.module').then(m => m.TabsPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule { }
