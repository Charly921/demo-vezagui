import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../shared/client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  clients=null;
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.clientService.getAll().subscribe(result => {
      this.clients = result;
    });
  }
}
