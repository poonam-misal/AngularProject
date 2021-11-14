import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {
onall:any=true;
onregi:any=false;
onlogin:any=false;
oncert:any=false;
onmedical:any=false;
onraise:any=false;
  constructor() { }

  ngOnInit(): void {
  }
  all(){
    this.onall=true;
    this.onregi=false;
    this.onlogin=false;
    this.oncert=false;
    this.onmedical=false;
    this.onraise=false;

  }

  registration(){
    this.onall=false;
    this.onregi=true;
    this.onlogin=false;
    this.oncert=false;
    this.onmedical=false;
    this.onraise=false;

  }
  lpgin(){
    this.onall=false;
    this.onregi=false;
    this.onlogin=true;
    this.oncert=false;
    this.onmedical=false;
    this.onraise=false;

  }

  certificate(){
    this.onall=false;
    this.onregi=false;
    this.onlogin=false;
    this.oncert=true;
    this.onmedical=false;
    this.onraise=false;

  }

  medical(){

    this.onall=false;
    this.onregi=false;
    this.onlogin=false;
    this.oncert=false;
    this.onmedical=true;
    this.onraise=false;
  }

  raise(){
    this.onall=false;
    this.onregi=false;
    this.onlogin=false;
    this.oncert=false;
    this.onmedical=false;
    this.onraise=true;
  }
}
