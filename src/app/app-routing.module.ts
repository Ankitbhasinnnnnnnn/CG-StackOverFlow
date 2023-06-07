import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagsComponent } from './tags/tags.component';
import { QuestionsComponent } from './questions/questions.component';
import { AskAQuestionComponent } from './ask-a-question/ask-a-question.component';
import { QuestionCommentsComponent } from './question-comments/question-comments.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerificationComponent} from './verification/verification.component';
import { NewPasswordComponent} from './new-password/new-password.component';
import { PasswordChangedComponent } from './password-changed/password-changed.component';
const routes: Routes = [
  { path: '', component: QuestionCommentsComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'ask-a-question', component: AskAQuestionComponent },
  { path: 'question-comments', component: QuestionCommentsComponent },
  {path: 'Login', component: LoginComponent },
  {path: 'forgot-password', component: ForgotPasswordComponent },
  {path: 'sign-up', component: SignUpComponent },
  {path: 'verification', component:VerificationComponent },
  {path: 'new-password', component:NewPasswordComponent},
  {path:  'password-changed', component:PasswordChangedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
