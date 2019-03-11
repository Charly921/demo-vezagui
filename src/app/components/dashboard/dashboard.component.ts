import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  filter_key = '';
  p: number = 1;
  clients=null;
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.clientService.getAll().subscribe(result => {
      if(result){
      this.clients = result; 
      this.clients.shift();
      }
    });
  }
}
