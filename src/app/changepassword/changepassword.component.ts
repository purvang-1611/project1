import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { Login } from '../login/login';
import { and } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
oldpass:string;
newpass:string;
new1pass:string;
flag:number=0;
id:string;
username:string;
mobile:string;
city:string;
gender:string;
address:string;
password:string;

  constructor(private _receive:ActivatedRoute,private _send:Router,private _data:LoginService) { }

  ngOnInit() {
    this.id=this._receive.snapshot.params['id'];
    this._data.getUserById(this.id).subscribe(
      (data:Login[])=>{
        this.username=data[0].Username;
        this.city=data[0].City;
        this.gender=data[0].Gender;
        this.address=data[0].Address;
        this.mobile=data[0].Mobile;
        this.password=data[0].Password;
      }
    );
  }
  onSave(){
    if(this.new1pass=="" || this.newpass==""){
      alert("New Password must not be empty.");
    }
    else{
      if(this.new1pass==this.newpass){
        if(this.oldpass==this.password){
          this._data.updatePassword(new Login(this.id,this.newpass,this.username,this.mobile,this.city,this.gender,this.address)).subscribe(
            (data:any)=>{
              alert("Successfully Updated.")
              this._send.navigate(['']);
            }
          );
        }
        else{
          alert("Invalid Old Password.");
        }

      }
      else{
        alert("New Password and Re-enter password must be same.");
      }
    }

  }

}
