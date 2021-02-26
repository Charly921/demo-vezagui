import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url= 'http://localhost/abcd/';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${this.url}getAll.php`);
  }

  add(client){
    return this.http.post(`${this.url}add.php`, JSON.stringify(client));
  }

  getOne(orden: number){
    return this.http.get(`${this.url}getOne.php?orden=${orden}`);
  }
  update(client) {
    return this.http.post(`${this.url}update.php`, JSON.stringify(client));    
  } 

  mail(){
    console.log('mail!');
    return this.http.post(`${this.url}mail.php`, {id:1,email:'micorreo@prueba.com'});
  }
}
