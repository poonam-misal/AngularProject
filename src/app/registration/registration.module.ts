import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegesterMemberComponent } from './regester-member/regester-member.component';
import { RouterModule, Routes } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'regester-member',component:RegesterMemberComponent}
]

@NgModule({
  declarations: [
    RegesterMemberComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    InputTextModule,
     HttpClientModule,
     FormsModule
  ]
})
export class RegistrationModule { }
