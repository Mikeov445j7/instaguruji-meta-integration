import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-panchang-grah-table',
  templateUrl: './grah-table.page.html',
  styleUrls: ['./grah-table.page.scss']
})
export class GrahTablePage {
  @Input() content: any;
}