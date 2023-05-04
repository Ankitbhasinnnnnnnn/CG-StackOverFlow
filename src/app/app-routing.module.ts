import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagsComponent } from './tags/tags.component';
import { QuestionsComponent } from './questions/questions.component';
import { AskAQuestionComponent } from './ask-a-question/ask-a-question.component';
const routes: Routes = [
  {path:'tags', component: TagsComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'ask-a-question', component: AskAQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
