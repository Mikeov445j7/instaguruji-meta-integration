import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-pull-refresher',
  templateUrl: './pull-refresher.page.html',
  styleUrls: ['./pull-refresher.page.scss']
})
export class PullRefresherPage {
  @Input() loaderText: string = '';
  @Output() pullToRefresh: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  doRefresh(event: any) {
    this.pullToRefresh.emit(event);
  }

}
