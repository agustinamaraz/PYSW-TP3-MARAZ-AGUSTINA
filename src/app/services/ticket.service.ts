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

  public addTicket(ticket: Ticket) { //agregar ticket al vector
    ticket.id = this.getIdDisponible();
      // ticket.id = this.tickets.length +1;
    this.tickets.push(ticket);
  }

  public addModifiedTicket(ticket:Ticket):void{
    let index: number = this.tickets.findIndex(t => ((t.id) === ticket.id));
    console.log("entrando al metodo addModifiedTicket del SERVICE...");
    if(index >= 0){
      console.log(this.tickets[index]);
      this.tickets[index] = ticket;
      console.log("TICKET MODIFICADO");
    }else{
      console.log("No se encontro el ticket en el array de tickets");
    }
    console.log("SALIENDO al metodo addModifiedTicket del SERVICE...");
  }

  public editTicket(id:string):Ticket{
    const index = this.tickets.findIndex(t => t.id === parseInt(id) );
    return this.tickets[index];
  }

  public deleteTicket(ticket: Ticket){
    this.tickets.splice(this.tickets.findIndex(t=> t.id === ticket.id),1); 
  }

  getIdDisponible() {
    var maxid: number;
    maxid = 0;
    for (var i = 0; i < this.tickets.length; i++) {
      if (maxid < this.tickets[i].id) {
        maxid = this.tickets[i].id;
      }
    };
    return (maxid + 1);
  }

  public getTickets() { //obtener el vector de ticket
    return this.tickets;
  }

  getTicket(id: string): Ticket {
    let ticket: Ticket = new Ticket();
    let indexTicket: number = this.tickets.findIndex(t => ((t.id) == parseInt(id)));
    ticket = this.tickets[indexTicket];
    return ticket;
  }
}