import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{OnInit} from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public LoginCreditianls: object = {};
  constructor(private loginservice: LoginService , private route:Router) { }

  ngOnInit(): void {

  }
  LoginUser(email:string, password:string) {
    
    this.LoginCreditianls = {
      email: email,
      password: password
    }
    console.log(this.LoginCreditianls)
    this.loginservice.LoginUser(this.LoginCreditianls).subscribe((resp:any) => {
      if(resp.isValid == true) {
      this.route.navigate(["/login"]);
      sessionStorage.setItem("Email", email);
      }
    });
  }
}
