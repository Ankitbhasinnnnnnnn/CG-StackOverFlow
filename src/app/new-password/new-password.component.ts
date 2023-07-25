import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent {
  constructor(private route: Router) {
      
  }
  Submit = () => {
    debugger;
    this.route.navigate(['/password-changed']);
  }
}
