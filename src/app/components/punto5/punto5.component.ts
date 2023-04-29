import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-punto5',
  templateUrl: './punto5.component.html',
  styleUrls: ['./punto5.component.css']
})
export class Punto5Component implements OnInit {
  comprobante: Ticket;
  accion:string="new";
  constructor(private ticketService: TicketService,private activatedRouter:ActivatedRoute) {
    this.comprobante = new Ticket();
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      if(params['id']== "0"){
        this.accion = "new";
      }else{
        this.accion = "update";
        this.modificarTicket;
      }
    })
  }

  public guardarTicket() {
    this.comprobante.fechaCobro = new Date();
    this.ticketService.addTicket(this.comprobante);
    console.log(this.comprobante);
    this.comprobante = new Ticket();
  }

  public modificarTicket(id:string):Ticket{
    this.comprobante
  }

  public calcularDescuento() {
    this.comprobante.precioCobrado = this.comprobante.precioReal;

    if (this.comprobante.tipoEspectador === 'l') {
      this.comprobante.precioCobrado = this.comprobante.precioReal - this.comprobante.precioReal * 0.20;
    }

    return this.comprobante.precioCobrado;
  }

  public listarTicket() {
    return this.ticketService.getTickets();
  }

}
