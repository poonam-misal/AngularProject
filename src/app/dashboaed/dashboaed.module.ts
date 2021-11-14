import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSummaryComponent } from './dashboard-summary/dashboard-summary.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import {ButtonModule} from 'primeng/button';


const routes: Routes = [
  {path:'dashboard-summary',component:DashboardSummaryComponent},
   {path:'summary',component:SummaryComponent}
]
@NgModule({
  declarations: [
    SummaryComponent,
    DashboardSummaryComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    // ButtonModule
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DashboaedModule { }
