import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-punto5',
  templateUrl: './punto5.component.html',
  styleUrls: ['./punto5.component.css']
})
export class Punto5Component implements OnInit {
  comprobante: Ticket;

  constructor(private ticketService: TicketService) {
    this.comprobante = new Ticket();
  }

  ngOnInit(): void {
  }

  public guardarTicket() {

    this.comprobante.fechaCobro = new Date();
    this.ticketService.addTicket(this.comprobante);
    console.log(this.comprobante);
    this.comprobante = new Ticket();
  }

  public calcularDescuento() {
    this.comprobante.precioCobrado = this.comprobante.precioReal;
    if (this.comprobante.tipoEspectador === 'l') {
      this.comprobante.precioCobrado = this.comprobante.precioReal * 0.20;
    }

    return true;
  }

  public listarTicket() {
    return this.ticketService.getTickets();
  }

}
