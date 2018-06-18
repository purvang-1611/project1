import { Route,RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditprofileComponent } from './viewprofile/editprofile/editprofile.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const arr:Route[]=[
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'viewprofile/:id',component:ViewprofileComponent},
  {path:'editprofile/:id',component:EditprofileComponent},
  {path:'forgot',component:ForgotpasswordComponent},
  {path:'changepassword/:id',component:ChangepasswordComponent}
];

export const routing=RouterModule.forRoot(arr);
