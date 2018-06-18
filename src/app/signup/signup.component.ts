import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Login } from '../login/login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
id:string;
username:string;
password:string;
rbtn:string="Male";
city:string;
address:string;
mobile:string;
  constructor(private _send:Router,private _data:LoginService,private _receive:ActivatedRoute) { }

  ngOnInit() {
    this._receive.snapshot;

  }
  onSave(){
    this._data.addUser(new Login(this.id,this.password,this.username,this.mobile,this.city,this.rbtn,this.address)).subscribe(
      (data:any)=>{
        alert("added");
        this._send.navigate(['']);
      }
    );

  }
  onCancel(){
    this._send.navigate(['']);
  }
}
