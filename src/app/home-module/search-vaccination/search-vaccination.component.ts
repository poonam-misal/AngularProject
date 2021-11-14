import { Component, OnInit } from '@angular/core';
import { DataShearingService } from 'src/app/service/data-shearing.service';

@Component({
  selector: 'app-search-vaccination',
  templateUrl: './search-vaccination.component.html',
  styleUrls: ['./search-vaccination.component.css']
})
export class SearchVaccinationComponent implements OnInit {
  public UserState:any
  public data1:any
  public selectedState:any
 public userDistrict:any

  
  
  constructor(private srvice: DataShearingService) {
    this.getState();
    
  }
 
  
  ngOnInit(): void {
  }
 

    getState(){
    this.srvice.getState().subscribe((res)=>{
      //console.log(res);
      this.UserState=res;
      this.UserState=this.UserState.states;
       //console.log(this.UserState);
       
    })
  }
      getDistrict(state_id:any){
       this.srvice.getDistrict(state_id).subscribe((res)=>{
        
        this.userDistrict=res;
        this.userDistrict=this.userDistrict.districts;
        console.log(this.userDistrict);
        })


  }
  onStateSelect(ev:any){
   //let stateName= ev.target.value
    // console.log(this.UserState, stateName, this.selectedState)                  //id
    // var state = this.UserState.filter(function (el:any){
    //    return el.state_name==stateName;
    //    })
    //   console.log(state)
    //     let state_id=state[0].state_id;
         this.getDistrict(this.selectedState)
   
  }

  }


