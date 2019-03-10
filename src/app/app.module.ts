import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GaugeChartComponent } from 'angular-gauge-chart';
import { SignaturePadModule } from 'angular2-signaturepad';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewSurveyComponent } from './components/new-survey/new-survey.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientService } from './services/client.service';

@NgModule({
  declarations: [
    AppComponent,
    NewSurveyComponent,
    DashboardComponent,
    GaugeChartComponent
  ],
  imports: [
    BrowserModule,
    SignaturePadModule,
    FormsModule,
    HttpClientModule,   
    AppRoutingModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
