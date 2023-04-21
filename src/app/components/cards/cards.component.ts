import { Component } from '@angular/core';
import language from "../../../api"

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  languages = language.languages; 

}
