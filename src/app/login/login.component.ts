import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data = "Your Perfect Banking Partner"
  data1 = "Enter your ac number"
  // accno=""
  // or
  acno: any
  psw: any


  userDetails: any = {
    1000: { usename: "anu", acno: 1000, password: "abc123", balance: 0 },
    1001: { usename: "amal", acno: 1001, password: "abc123", balance: 0 },
    1002: { usename: "anju", acno: 1002, password: "abc123", balance: 0 },
    1003: { usename: "arun", acno: 1003, password: "abc123", balance: 0 },
    1004: { usename: "arul", acno: 1004, password: "abc123", balance: 0 }

  }
  constructor(private router:Router,private ds:DataService){

  }

  login() {
    var acnum = this.acno
    var psw = this.psw
    var userDetails = this.userDetails
    if (acnum in userDetails) {
      if (psw == userDetails[acnum]["password"]) {
        alert('login success')
        //redirecting
       this.router.navigateByUrl("dashboard")

      }
      else {
        alert('incorrect password')
      }
    }
    else {
      alert('incorrect acno')
    }
    // alert("login-worked")
  }

  // acnoChange(event:any){
  //   this.acno=event.target.value;
  //   // console.log(this.acno);

  // }
  // pswChange(event:any){
  //  this.psw= event.target.value
  //  console.log(this.psw);

  // }



}








