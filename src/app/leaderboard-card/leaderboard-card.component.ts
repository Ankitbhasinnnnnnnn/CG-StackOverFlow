import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leaderboard-card',
  templateUrl: './leaderboard-card.component.html',
  styleUrls: ['./leaderboard-card.component.scss'],
})
export class LeaderboardCardComponent {
  @Input() srcValue: any = '';
}
