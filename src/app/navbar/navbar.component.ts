import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router) {}
  isLanding: boolean = false;
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
