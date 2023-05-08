import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagsComponent } from './tags/tags.component';
import { QuestionsComponent } from './questions/questions.component';
import { AskAQuestionComponent } from './ask-a-question/ask-a-question.component';
import { QuestionCommentsComponent } from './question-comments/question-comments.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'ask-a-question', component: AskAQuestionComponent },
  { path: 'question-comments', component: QuestionCommentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
