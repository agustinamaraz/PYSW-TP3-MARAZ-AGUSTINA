import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  productos: Array<any>;
  carrito: Array<any> = [];
  total_plata:number = 0;

  constructor() { 
    this.productos = [
      {nombre: 'notebook asus 13L', descripcion: 'disco 40GB, 15pulgadas', img: 'imagen1.jpg', precio: 45.5},
      {nombre: 'Monitor LG 14', descripcion: 'texto descriptivo producto 02', img: 'imagen2.jpg', precio: 100},
      {nombre: 'Monitor LG 55', descripcion: 'texto descriptivo producto 02', img: 'imagen3.jpg', precio: 150},
      {nombre: 'Monitor HP', descripcion: 'texto descriptivo producto 02', img: 'imagen1.jpg', precio: 160},
      {nombre: 'Monitor HP', descripcion: 'texto descriptivo producto 02', img: 'imagen2.jpg', precio: 170},
      {nombre: 'Monitor HP', descripcion: 'texto descriptivo producto 02', img: 'imagen3.jpg', precio: 200}
    ];

  }

  ngOnInit(): void {
  }

  public agregarAlCarrito(producto: any): void
  {
    this.total_plata+=producto.precio;
    this.carrito.push(producto);
  }

  public verCarrito() {
    
  }

}
