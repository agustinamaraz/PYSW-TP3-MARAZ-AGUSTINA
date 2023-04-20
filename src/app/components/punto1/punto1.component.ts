import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  titulo: string; //var definida que por defecto tiene valor null
  productos: Array<any>;
  carrito: Array<any> = [];
  total_plata:number = 0;

  constructor() { 
    this.titulo = 'Imagen de Puma';
    this.productos = [
      {nombre: 'notebook asus 13L', descripcion: 'disco 40GB, 15pulgadas', img: 'notebook13l.jpg', precio: 45.5},
      {nombre: 'Monitor LG 14', descripcion: 'texto descriptivo producto 02', img: 'producto02.jpg', precio: 99},
      {nombre: 'Monitor LG 55', descripcion: 'texto descriptivo producto 02', img: 'producto02.jpg', precio: 99},
      {nombre: 'Monitor HP', descripcion: 'texto descriptivo producto 02', img: 'producto05.jpg', precio: 99}
    ];

  }

  ngOnInit(): void {
  }

  public agregarProducto(producto: any)
  {
    this.total_plata+=producto.precio;
    this.carrito.push({'noombre':producto.nombre,'descripcion':producto.descripcion});
  }

}
