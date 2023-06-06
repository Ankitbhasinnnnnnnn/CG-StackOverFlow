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
import { QuestionCommentsComponent } from './question-comments/question-comments.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerificationComponent } from './verification/verification.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { PasswordChangedComponent } from './password-changed/password-changed.component';

@NgModule({
  declarations: [
    AppComponent,
    TagsComponent,
    NavbarComponent,
    QuestionsComponent,
    LeaderboardCardComponent,
    QuestionCardComponent,
    QuestionsComponent,
    AskAQuestionComponent,
    QuestionCommentsComponent,
    LandingPageComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    VerificationComponent,
    NewPasswordComponent,
    PasswordChangedComponent
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
