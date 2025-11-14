import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-panchang-planet-table',
  templateUrl: './planet-table.page.html',
  styleUrls: ['./planet-table.page.scss']
})
export class PlanetTablePage {
  @Input() content: any;
}