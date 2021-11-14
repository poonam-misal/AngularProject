import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataShearingService {

  constructor(private http: HttpClient ) { }


  generatOtp(mobNo:any){
    let requestData={
      "mobile":mobNo
    }
    return this.http.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',requestData)

  }

  conformOtp(txnId:any){
    let requestData={
      "otp":"63354",
      "txnId":txnId
    }
return this.http.post('https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP',requestData)
  }

  getState(){
    return this.http.get('https://cdn-api.co-vin.in/api/v2/admin/location/states')
  }

getDistrict(state_id:any){
let url='https://cdn-api.co-vin.in/api/v2/admin/location/districts/'+state_id;
// console.warn(url)

return this.http.get(url);
}
  

}
