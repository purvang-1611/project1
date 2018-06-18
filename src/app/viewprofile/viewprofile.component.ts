import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Login } from '../login/login';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
Email:string;
Password:string;
Username:string;
City:string;
Mobile:string;
Gender:string;
Address:string;
id:string;
  constructor(private _receive:ActivatedRoute,private _data:LoginService,private _send:Router) { }

  ngOnInit() {
    this.id=this._receive.snapshot.params['id'];
    console.log(this.id);
    this._data.getUserById(this.id).subscribe(
      (data:Login[])=>{
        console.log(data);
        this.Email=data[0].Email;
        this.Password=data[0].Password;
        this.Username=data[0].Username;
        this.Mobile=data[0].Mobile;
        this.City=data[0].City;
        this.Gender=data[0].Gender;
        this.Address=data[0].Address;

      }
    );

  }
  onEdit(){
    this._send.navigate(['/editprofile',this.Email]);
  }
  onChange(){
    this._send.navigate(['/changepassword',this.Email]);
  }
  onLogout(){
    this._send.navigate(['']);
  }
}
