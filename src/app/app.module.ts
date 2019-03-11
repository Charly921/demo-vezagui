import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { GaugeChartComponent } from 'angular-gauge-chart';
import { GaugeChartModule } from 'angular-gauge-chart';
import { SignaturePadModule } from 'angular2-signaturepad';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewSurveyComponent } from './components/new-survey/new-survey.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientService } from './services/client.service';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewSurveyComponent,
    DashboardComponent,
    //GaugeChartComponent,
    EditFormComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    SignaturePadModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,   
    NgxPaginationModule,
    GaugeChartModule,
    AppRoutingModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
