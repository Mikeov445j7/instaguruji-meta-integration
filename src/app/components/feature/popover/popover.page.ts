import { Component } from '@angular/core';
@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss']
})
export class PopoverPage {
  constructor() { }

  onItemClick(item: string) {
    if (item === 'Manoranjan') {
      window.open('http://radio.garden/', '_system');
    } if (item === 'Youtube') {
      window.open('https://youtube.com/channel/UC-iG3jS4XfPtkhzRI3Qb2kg', '_system');
    }
  }

}
