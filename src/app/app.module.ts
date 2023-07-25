import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
import { EditorComponent } from './editor/editor.component';
import { ElipsispipePipe } from './elipsispipe.pipe';
import { AvatarComponent } from './components/avatar/avatar.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule} from '@angular/common/http';
import { CKEditorModule } from 'ng2-ckeditor';
import { QuillModule } from 'ngx-quill'
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
    PasswordChangedComponent,
    EditorComponent,
    ElipsispipePipe,
    AvatarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, AngularEditorModule, HttpClientModule,CKEditorModule,QuillModule.forRoot()],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
