import { Component, OnInit } from '@angular/core';
import { DataShearingService } from 'src/app/service/data-shearing.service';


@Component({
  selector: 'app-regester-member',
  templateUrl: './regester-member.component.html',
  styleUrls: ['./regester-member.component.css']
})
export class RegesterMemberComponent implements OnInit {
 public mobNo:any;
 public txnId:any;
 public otp:any;

 genration:any=true;
 confoimation:any=false;

  constructor(private mySer:DataShearingService) { }

  ngOnInit(): void {
  }
  generateOtp(){
console.log(this.mobNo);

this.mySer.generatOtp(this.mobNo).subscribe((res)=>{
  console.log(res);
  
  let data:any= res;
  console.log(data.txnId);
  this.txnId= data.txnId;
 
})
this.genration=false;
this.confoimation=true;
}
 conformOtp(){
 this.mySer.conformOtp(this.txnId).subscribe((res)=>{
  console.log(res);
})

}

}
