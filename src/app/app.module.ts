import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagsComponent } from './tags/tags.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionsComponent } from './questions/questions.component';
import { LeaderboardCardComponent } from './leaderboard-card/leaderboard-card.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { AskAQuestionComponent } from './ask-a-question/ask-a-question.component';

@NgModule({
  declarations: [
    AppComponent,
    TagsComponent,
    NavbarComponent,
    QuestionsComponent,
    LeaderboardCardComponent,
    QuestionCardComponent,
    QuestionsComponent,
    AskAQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
