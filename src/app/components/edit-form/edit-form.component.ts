import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

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
  
  client={
    orden: null,
    nombre: null,
    rfc: null,
    direccion: null,
    tel: null,
    ciudad: null,
    tarjeta: null,
    manual: null,
    poliza: null,
    marca: null,
    modelo: null,
    color: null,
    placas: null,
    km: null,
    observaciones: null,
    falla: null,
    fecha: null,
    combustible: null,
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
    velocimetro: null,
    indicadort: null,
    indicadorg: null,
    radio: null,
    bocinas: null,
    espejoi: null,
    aire: null,
    luces: null,
    extintor: null,
    reflejante: null,
    gato: null,
    condiciones: null,
    sensord: null,
    velocimetrod: null,
    indicadortd: null,
    indicadorgd: null,
    radiod: null,
    bocinasd: null,
    espejoid: null,
    aired: null,
    lucesd: null,
    extintord: null,
    reflejanted: null,
    gatod: null,
    condicionesd: null,
    llantas: null,
    toldo: null,
    antena: null,
    faciad: null,
    faciat: null,
    cristales: null,
    limpiadores: null,
    espejose: null,
    taponc: null,
    taponr: null,
    llantar: null,
    aceite: null,
    anticongelante: null,
    liquido: null,
    aceiteh: null,
    bateria: null,
    bandas: null,
    llantasd: null,
    toldod: null,
    antenad: null,
    faciadd: null,
    faciatd: null,
    cristalesd: null,
    limpiadoresd: null,
    espejosed: null,
    taponcd: null,
    taponrd: null,
    llantard: null,
    aceited: null,
    anticongelanted: null,
    liquidod: null,
    aceitehd: null,
    bateriad: null,
    bandasd: null
  };
  //client={};
  constructor(
    private clientService: ClientService,
    private actRouter: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    const orden = this.actRouter.snapshot.paramMap.get('orden');
    this.getOne(orden);
  }

  getOne(orden){
    this.clientService.getOne(orden).subscribe(result => {
      this.client = result[0];
      this.needleValue = result[0].combustible;
      
    });
  }
  update() {
    this.clientService.update(this.client).subscribe(datos =>{
      if(datos['resultado']=='OK'){
        alert(datos['mensaje']);
        this.router.navigate(['/dashboard']);
      }
    });  
  }

}
