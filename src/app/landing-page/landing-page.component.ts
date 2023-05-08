import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  openCurly: any = '{';
  closeCurly: any = '}';
  value1: any = 'connect with experts';
  value2: any = 'expand your horizons';
}
