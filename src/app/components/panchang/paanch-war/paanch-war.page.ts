import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-panchang-paanch-war',
  templateUrl: './paanch-war.page.html',
  styleUrls: ['./paanch-war.page.scss']
})
export class PaanchWarPage {
  @Input() content: any;
  @Input() type: string;
}