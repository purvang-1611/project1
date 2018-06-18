import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Login } from './login/login';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
url:string="http://localhost:3000/user/";
url1:string="http://localhost:3000/signup/";
  constructor(private _user:HttpClient) { }

  getUserForLogin(item:Login){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._user.post(this.url,body,{headers:head1});
  }
  getUserById(id:string){
    return this._user.get(this.url+id);
  }
  updateUser(item:Login){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._user.put(this.url+item.Email,body,{headers:head1});

  }
  addUser(item:Login){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._user.post(this.url1,body,{headers:head1});

  }
  updatePassword(item:Login){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._user.put(this.url1+item.Email,body,{headers:head1});
  }
}
