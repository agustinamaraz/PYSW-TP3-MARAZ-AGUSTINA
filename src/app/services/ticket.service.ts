import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  tickets!: Array<Ticket>;

  constructor() { 
    this.tickets = new Array<Ticket>();
  }

  public addTicket(ticket:Ticket){ //agregar ticket al vector
    ticket.id=this.tickets.length+1;
    this.tickets.push(ticket);
  }

  public getTickets(){ //obtener el vector de ticket
    return this.tickets;
  }
}