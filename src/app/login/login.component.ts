import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public LoginCreditianls: object = {};
  route: any;
  LoginUser(email:string, password:string) {
    debugger;
    this.LoginCreditianls = {
      email: email,
      password: password
    }
   
  }
  forgotPassword(){
   
  }

  signUp(){
   
    
  }
}
