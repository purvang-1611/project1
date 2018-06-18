import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Login } from './login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
emailid:string;
password:string;

  constructor(private _user:LoginService,private _route:Router) { }

  ngOnInit() {
  }

  onClick(){

    this._user.getUserForLogin(new Login(this.emailid,this.password)).subscribe(
    (data:Login[])=>{
        if(data.length>0){
          alert("successfully login");
          this._route.navigate(['/viewprofile',data[0].Email]);
        }
        else{
          alert("invalid Username Password");
        }

      }

    );
  }
  onSignup(){
    this._route.navigate(['/signup']);
  }

}
