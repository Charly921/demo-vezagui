import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewSurveyComponent } from './components/new-survey/new-survey.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';

const routes: Routes = [
  {path: '',redirectTo:'/',pathMatch:'full'},
  {path: '', component: NewSurveyComponent},
  {path: 'new',component: NewSurveyComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'edit-form/:orden',component:EditFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
