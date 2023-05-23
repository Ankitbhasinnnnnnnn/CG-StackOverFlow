import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public LoginCreditianls: object = {};
  LoginUser(email:string, password:string) {
    debugger;
    this.LoginCreditianls = {
      email: email,
      password: password
    }
   
  }
  forgetPassword(){
    // this.route.navigate(['']) // this is for the forget password to na igate to that page
  }

  redirectToRegisterPage(){
    
  }
}
