import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { RouterModule, Routes } from '@angular/router';
import { VaccinationCountComponent } from './vaccination-count/vaccination-count.component';
import { SearchVaccinationComponent } from './search-vaccination/search-vaccination.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import { RiseIsseueComponent } from './rise-isseue/rise-isseue.component';
import { StepToVaccineComponent } from './step-to-vaccine/step-to-vaccine.component';
import { FAQComponent } from './faq/faq.component';
import {ButtonModule} from 'primeng/button';
import { SummaryComponent } from './summary/summary.component';
import { PartnerComponent } from './partner/partner.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { FormsModule } from '@angular/forms';
import {  CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA} from '@angular/core';
import { TabViewModule } from 'primeng/tabview';




const routes: Routes = [
  {path:'home', component:HomeCompComponent},
 {path:'vaccinationCount',component:VaccinationCountComponent},
 {path:'search',component:SearchVaccinationComponent},
 {path:'whatsnew',component:WhatsnewComponent},
 {path:'riseIs',component:RiseIsseueComponent},
 {path:'step',component:StepToVaccineComponent},
 {path:'faq',component:FAQComponent},
 {path:'summary',component:SummaryComponent},
 {path:'patner',component:PartnerComponent}

]

@NgModule({
  declarations: [
    HomeCompComponent,
    VaccinationCountComponent,
    SearchVaccinationComponent,
    WhatsnewComponent,
    RiseIsseueComponent,
    StepToVaccineComponent,
    FAQComponent,
    SummaryComponent,
    PartnerComponent,
    
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    ButtonModule,
    ScrollPanelModule,FormsModule,
    TabViewModule
  
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
  
})
export class HomeModuleModule { }
