import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerFormHelperComponent } from './components/helper/answer-form-helper/answer-form-helper.component';
import { CourtHearingHelperComponent } from './components/helper/court-hearing-helper/court-hearing-helper.component';
import { HomeComponent } from './components/home/home.component';
import { MoveOutHelperComponent } from './components/helper/move-out-helper/move-out-helper.component';
import { SecondaryHomeComponent } from './components/helper/secondary-home/secondary-home.component';
import { FileAnswerComponent } from './components/answer-form/file-answer/file-answer.component';
import { TenancyComponent } from './components/answer-form/tenancy/tenancy.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "helper", component: SecondaryHomeComponent },
  { path: "move-out", component: MoveOutHelperComponent },
  { path: "court-hearing", component: CourtHearingHelperComponent },
  { path: "answer-form", component: AnswerFormHelperComponent },
  { path: "file-answer", component: FileAnswerComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
