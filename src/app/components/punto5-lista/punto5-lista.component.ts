import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-punto5-lista',
  templateUrl: './punto5-lista.component.html',
  styleUrls: ['./punto5-lista.component.css']
})
export class Punto5ListaComponent implements OnInit {
    
  tickets:Array<Ticket>

  constructor(private ticketService:TicketService,
              private router:Router) { 
    this.tickets = new Array<Ticket>();
    this.mostrarListaTickets();
  }

  ngOnInit(): void {
  }

  mostrarListaTickets(){
    this.tickets = this.ticketService.getTickets();
  }

  agregarTicket(){
    this.router.navigate(["punto5",0]);
  }

  modificarTicket(ticket:Ticket){
    this.router.navigate(["punto5",ticket.id]);
  }

  eliminarTicket(ticket:Ticket){

  }

}
