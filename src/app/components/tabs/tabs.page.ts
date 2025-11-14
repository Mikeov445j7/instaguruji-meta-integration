import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss']
})
export class TabsPage {
  @ViewChild('menuExplorer') menuExplorer: ElementRef;
  isMenuOpen: boolean = false;
  isContentPage: boolean = false;
  constructor(private renderer: Renderer2,
    private _router: Router) { }

  ionViewWillEnter() {
    this.renderer['removeClass'](this.menuExplorer.nativeElement, 'scale-in-bottom');
    this._router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.isContentPage = route.url.indexOf('/tabs/category/content') != -1 || route.url.indexOf('/tabs/order-pooja') != -1;
      }
    })
  }

  onMenuClick(e: any) {
    e.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.renderer['addClass'](this.menuExplorer.nativeElement, 'scale-in-bottom');
    } else {
      this.renderer['removeClass'](this.menuExplorer.nativeElement, 'scale-in-bottom');
    }
    const active = this.menuExplorer.nativeElement.classList.contains('scale-in-bottom') && this.isMenuOpen;
    if (!active) {
      this.menuExplorer.nativeElement.focus();
    }
  }

  onFocusout(e: any) {
    e.stopPropagation();
    this.renderer['removeClass'](this.menuExplorer.nativeElement, 'scale-in-bottom');
  }
}