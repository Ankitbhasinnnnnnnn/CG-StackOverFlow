import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  inputVal:any;
  inputemail:any;
  inputpass:any;

  constructor(){

  }

  ngOnInit(): void{

  }

  OnSignup(username:any,emails:any,password:any){
    const signupDetails={
      username:username.value,
      emails:emails.value,
      password:password.value
  }
  console.log(signupDetails);
 }
}

