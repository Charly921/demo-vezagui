import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewSurveyComponent } from './components/new-survey/new-survey.component';

const routes: Routes = [
  {path: '',redirectTo:'/',pathMatch:'full'},
  {path: '', component: NewSurveyComponent},
 /* {path: 'login', component:LoginComponent, canActivate: [SecureInnerPagesGuard]},*/
  {path: 'dashboard', component:DashboardComponent/*, canActivate: [AuthGuard]*/}/*,
  {path: 'show-survey/:key',component:ShowSurveyComponent, canActivate: [AuthGuard]}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
