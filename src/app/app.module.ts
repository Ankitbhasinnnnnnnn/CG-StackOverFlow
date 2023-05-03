import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagsComponent } from './tags/tags.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionsComponent } from './questions/questions.component';
import { LeaderboardCardComponent } from './leaderboard-card/leaderboard-card.component';
import { QuestionCardComponent } from './question-card/question-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TagsComponent,
    NavbarComponent,
    QuestionsComponent,
    LeaderboardCardComponent,
    QuestionCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
