import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewSurveyComponent } from './components/new-survey/new-survey.component';

const routes: Routes = [
  {path: '',redirectTo:'/',pathMatch:'full'},
  {path: '', component: NewSurveyComponent},
  {path: 'new',component: NewSurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
