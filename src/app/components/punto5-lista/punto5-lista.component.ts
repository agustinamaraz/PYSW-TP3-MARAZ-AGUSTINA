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
  totalVentas!:number;
  totalVentasLocal!:number;
  totalVentasExtranjero!:number;
  accion:string="";
  tickets:Array<Ticket>;

  constructor(private ticketService:TicketService, private router:Router) {
    this.tickets = new Array<Ticket>();
    this.mostrarListaTickets();
    this.calcularTotalVentas();
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
    console.log("entrando al metodo editar de LISTA...");
    this.router.navigate(["punto5",ticket.id]);
    console.log("salenod del  metodo editar de LISTA...");
  }

  eliminarTicket(ticket:Ticket){
    console.log("entrando al metodo eliminar de LISTA")
    this.ticketService.deleteTicket(ticket);
    this.router.navigate(["punto5-lista"]);
    console.log("saliendo del metodo modificar de LISTA");
    this.calcularTotalVentas();
  }

  calcularTotalVentas(){
    let local = 0;
    let extranjero = 0;

    this.tickets.forEach((ticket)=>{
      if(ticket.tipoEspectador === 'l')
        local += ticket.precioCobrado;
      else if(ticket.tipoEspectador === 'e')
        extranjero += ticket.precioCobrado;
    })

    this.totalVentasLocal=local;
    this.totalVentasExtranjero=extranjero;
    this.totalVentas = this.totalVentasExtranjero + this.totalVentasLocal;

  }

}
