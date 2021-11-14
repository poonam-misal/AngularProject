import { Component, OnInit } from '@angular/core';
import { DataShearingService } from '../service/data-shearing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public mobNo:any           //for service.
  constructor() { }
  vacssination:any=['Register Members','Search Vaccination Centers','Book Vaccination Slots','Manage Appoinment','Download Certificate']
  ngOnInit(): void {

    
  }
  navigateToStaff(){
    // console.log('hi')
  }

  navigateToPlatform(){
    console.log('hiiii')
  }

  navigateToResources(){
    console.log('hello')
  }

  navigateToSupport(){
    console.log('hellohi')
  }

  //  generatOtp(){
  //   console.log(this.mobNo);
  //   this.mySer.generatOtp(this.mobNo).subscribe((res)=>{
  //     console.log(res);
  //   })
  //  }
}
