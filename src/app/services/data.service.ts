import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDetails: any = {
    1000: { usename: "anu", acno: 1000, password: "abc123", balance: 0 },
    1001: { usename: "amal", acno: 1001, password: "abc123", balance: 0 },
    1002: { usename: "anju", acno: 1002, password: "abc123", balance: 0 },
    1003: { usename: "arun", acno: 1003, password: "abc123", balance: 0 },
    1004: { usename: "arul", acno: 1004, password: "abc123", balance: 0 }

  }

  register(acno:any,uname:any,psw:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={username:uname,acno,password:psw,balance:0}
      console.log(userDetails);
      
      return true
    }
  }
  constructor() { }
}
