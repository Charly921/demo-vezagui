import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import 'fecha';
import fechaObj from 'fecha';
import { ClientService } from '../../services/client.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  public signaturePadOptions: Object = {
    'minWidth': 0.7,
    'maxWidth': 1.2,
    'canvasWidth': 250,
    'canvasHeight': 80,
    'penColor': "rgb(16, 16, 16)"
  };
  public canvasWidth = 200
  public needleValue = 0
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
  //clients: any[];
  clients = null;

  //client: Client;
  
  client={
    orden: null,
    nombre: null,
    rfc: null,
    direccion: null,
    tel: null,
    ciudad: null,
    email: null,
    tarjeta: null,
    manual: null,
    poliza: null,
    marca: null,
    modelo: null,
    color: null,
    placas: null,
    km: null,
    observ: null,
    falla: null,
    fecha: null,
    combust: null,
    firma: null,
    img1: null,
    img1d: null,
    img2: null,
    img2d: null,
    img3: null,
    img3d: null,
    img4: null,
    img4d: null,
    sensor: null,
    veloci: null,
    indict: null,
    indicg: null,
    radio: null,
    bocinas: null,
    espejoi: null,
    aire: null,
    luces: null,
    extint: null,
    reflej: null,
    gato: null,
    condic: null,
    sensord: null,
    velocid: null,
    indictd: null,
    indicgd: null,
    radiod: null,
    bocinasd: null,
    espejoid: null,
    aired: null,
    lucesd: null,
    extintd: null,
    reflejd: null,
    gatod: null,
    condicd: null,
    llantas: null,
    toldo: null,
    antena: null,
    faciad: null,
    faciat: null,
    crista: null,
    limpia: null,
    espeje: null,
    taponc: null,
    taponr: null,
    llantar: null,
    aceite: null,
    anticon: null,
    liquido: null,
    aceiteh: null,
    bateria: null,
    bandas: null,
    llantasd: null,
    toldod: null,
    antenad: null,
    faciadd: null,
    faciatd: null,
    cristad: null,
    limpiad: null,
    espejed: null,
    taponcd: null,
    taponrd: null,
    llantard: null,
    aceited: null,
    anticond: null,
    liquidod: null,
    aceitehd: null,
    bateriad: null,
    bandasd: null
  };
  orden:number;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private location: Location,
    private actRouter: ActivatedRoute
    ) { }

  ngOnInit() {
   // this.getAll();
    this.fecha = fechaObj.format(new Date(),'D [DE] MMMM [DE] YYYY');
    this.client.fecha = this.fecha;
    this.client.combust = 0;
    this.clientService.mail();
  }

  ngAfterViewInit(){
    this.signaturePad.set('minWidth',0.5);
    this.signaturePad.clear();
  }

  clearPad(){
    this.signaturePad.clear();
  }

  drawComplete(){
    this.client.firma = this.signaturePad.toDataURL();
   // console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    console.log('begin drawing');
  }

  combus(){
    this.needleValue = this.client.combust;
  }

  changeIm($event) : void {
    this.readThis($event.target);
  }
  
  readThis(inputValue: any): void {
    if(inputValue.files[0]){
      var file:File = inputValue.files[0];
      var myReader:FileReader = new FileReader();
  
      myReader.onloadend = (e) => {
        if(inputValue.name == 'img1')   this.client.img1 = myReader.result;
        if(inputValue.name == 'img2')   this.client.img2 = myReader.result;
        if(inputValue.name == 'img3')   this.client.img3 = myReader.result;
        if(inputValue.name == 'img4')   this.client.img4 = myReader.result;
      }
      myReader.readAsDataURL(file);
    } 
  }

  getAll(){
      this.clientService.getAll().subscribe(result => {
      this.clients = result;
    });
  }

  add(){
    this.clientService.add(this.client).subscribe(data => {
      if(data['resultado']=='OK'){
        alert(data['mensaje']);
        if(this.location.path() === ''){
          this.router.navigate(['/new']);
        }
        if(this.location.path() === '/new'){
          this.router.navigate(['/']);
        }
      }
    });
  }

  
}
