import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private ds:DataService,private router:Router){

  }
  acno:any
  psw:any
  uname:any

register(){
  var acno=this.acno
  var psw=this.psw
  var uname=this.uname

  const result= this.ds.register(acno,uname,psw)
  if(result){
    alert('registersd')
    this.router.navigateByUrl("")
  }
else{
  alert('already present')
}
}

}
