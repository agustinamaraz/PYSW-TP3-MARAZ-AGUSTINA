export class Ticket {
    dni!: string;
    precioReal!: number;
    tipoEspectador!: string;
    fechaCobro!: Date;
    precioCobrado!: number;
    id!: number;

    ticket (dni:string,precioReal:number,tipoEspectador:string,fechaCobro:Date,precioCobrado:number){
        this.dni=dni;
        this.precioReal=precioReal;
        this.tipoEspectador=tipoEspectador;
        this.fechaCobro=fechaCobro;
        this.precioCobrado=precioCobrado;
    }
}
