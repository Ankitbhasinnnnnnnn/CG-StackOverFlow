import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit{

  constructor(private router: Router) {
    debugger;
    console.log(this.router.url);
  }


  ngOnInit() {
    
 
   if(this.router.url ==  '/tags') {
    console.log("tags")
    this.flag = true;
   }
   else if (this.router.url == '/questions') {
    console.log("questions")
    this.flag = false;
   }
  }
  flag: boolean | undefined;
  isLanding: boolean = false;
  @Input('isChecked') isCheck: boolean = false;
  isLandingPage(): boolean {
    // Replace 'landing' with the route path of your landing page
    console.log(this.router.url);
    if (this.router.url.toString() == '/') {
      this.isLanding = true;
    } else {
      this.isLanding = false;
    }
    return this.isLanding;
  }
}
