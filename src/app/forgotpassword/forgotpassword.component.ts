import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service";
import { Router } from "@angular/router";
import { Login } from "../login/login";

@Component({
  selector: "app-forgotpassword",
  templateUrl: "./forgotpassword.component.html",
  styleUrls: ["./forgotpassword.component.css"]
})
export class ForgotpasswordComponent implements OnInit {
  emailid: string;
  username: string;
  flag: boolean = false;
  password: string;
  f: number = 0;
  constructor(private _send: Router, private _data: LoginService) {}

  ngOnInit() {}
  onClick() {
    this._data.getUserById(this.emailid).subscribe((data: Login[]) => {
      if (data.length > 0) {
        if (data[0].Username == this.username) {
          this.flag = true;
          this.password = data[0].Password;
        } else {
          alert("username Invalid.");
        }
      } else {
        alert("Email Id is invalid");
      }
    });
  }
  onCancel(){
    this._send.navigate(['']);
  }
}
