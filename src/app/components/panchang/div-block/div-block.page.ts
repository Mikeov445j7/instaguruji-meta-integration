import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-panchang-div-block',
  templateUrl: './div-block.page.html',
  styleUrls: ['./div-block.page.scss']
})
export class DivBlockPage {
  @Input() content: any;
}