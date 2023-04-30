import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  copia:string='';
  
  constructor(private ticketService: TicketService,private activatedRouter:ActivatedRoute,private router:Router) {
    this.comprobante = new Ticket();
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      if(params['id']== "0"){
        this.accion = "new";
      }else{
        this.accion = "update";
        this.cargarTicket(params['id']);
      }
    })

  }

  public guardarTicket() { //registrar
    this.comprobante.fechaCobro = new Date();
    this.ticketService.addTicket(this.comprobante);
    console.log(this.comprobante);
    this.comprobante = new Ticket();

    this.router.navigate(["punto5-lista"]);
  }
   //carga los datos del ticket a modificar en el formulario para que no aparezca en blanco
  public cargarTicket(id:string){
    this.comprobante = this.ticketService.getTicket(id);
    this.copia = JSON.stringify(this.comprobante);
  }

  public modificarTicket(){
    console.log("entrando al metodo modificar de Formulario...");
    this.ticketService.addModifiedTicket(this.comprobante);
    this.router.navigate(["punto5-lista"]);
    console.log("saliendo del metodo modificar de Formulario...");
  }

  public eliminarTicket(ticket:Ticket){
    this.ticketService.deleteTicket(ticket);
  }

  public cancelar(){
    console.log("comprobante: ",this.comprobante);
    console.log("copia: ",this.copia);

    if(this.accion == 'update')
      this.comprobante = JSON.parse(this.copia);

    this.ticketService.addModifiedTicket(this.comprobante);

    console.log("comprobante: ",this.comprobante);
    console.log("comprobante: ",this.copia);
    this.router.navigate(["punto5-lista"]);
  }

  public calcularDescuento() {
    this.comprobante.precioCobrado = this.comprobante.precioReal;

    if (this.comprobante.tipoEspectador === 'l') {
      this.comprobante.precioCobrado = this.comprobante.precioReal - (this.comprobante.precioReal * 0.20);
    }

    return this.comprobante.precioCobrado;
  }

  public listarTicket() {
    return this.ticketService.getTickets();
  }

}
