import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import 'fecha';
import fechaObj from 'fecha';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  private signaturePadOptions: Object = {
    'minWidth': 0.7,
    'maxWidth': 1.2,
    'canvasWidth': 250,
    'canvasHeight': 80,
    'penColor': "rgb(16, 16, 16)"
  };
  public canvasWidth = 200
  public needleValue = 25
  public centralLabel = ''
  public name = ''
  public bottomLabel = ''
  public options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['red', 'yellow','green'],
    arcDelimiters: [33,67],
    rangeLabel: ['E', 'F'],
    needleStartValue: 60,
  }
  fecha: string;
  constructor() { }

  ngOnInit() {
    this.fecha = fechaObj.format(new Date(),'D [DE] MMMM [DE] YYYY');
  }

  ngAfterViewInit(){
    this.signaturePad.set('minWidth',0.5);
    this.signaturePad.clear();
  }

  clearPad(){
    this.signaturePad.clear();
  }

  drawComplete(){
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    console.log('begin drawing');
  }
}
