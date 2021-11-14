import { Component, OnInit } from '@angular/core';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

schemas: [ CUSTOM_ELEMENTS_SCHEMA ];
// schemas: [ NO_ERRORS_SCHEMA ];


@Component({
  selector: 'app-dashboard-summary',
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.css']
})
export class DashboardSummaryComponent implements OnInit {
  state:any=['Aasam','Goa','Mumbai']

  District:any=['select district']

  exael:any=['json','excle']
  constructor() { }

  ngOnInit(): void {

   

  }

  
}
