import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { LoginService } from '../../login.service';
import { Login } from '../../login/login';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
Email:string;
Gender:string;
City:string;
Address:string;
Mobile:string;
Username:string;
id:string;
Password:string;
  constructor(private _recieve:ActivatedRoute,private _data:LoginService,private _send:Router) { }

  ngOnInit() {
    this.id=this._recieve.snapshot.params['id'];
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
  onSave(){
    this._data.updateUser(new Login(this.Email,this.Password,this.Username,this.Mobile,this.City,this.Gender,this.Address)).subscribe(
      (data:any)=>{
        alert("successfully Save");
        this._send.navigate(['/viewprofile',this.Email]);
      }
    );
  }

}
