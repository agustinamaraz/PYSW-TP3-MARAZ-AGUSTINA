import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  productos: Array<any>;
  carrito: Array<any> = [];
  cantidadCarrito: number=0;
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

  public agregarAlCarrito(producto: any)
  {
    const index = this.carrito.findIndex(x => x.nombre === producto.nombre);
    if (index == 1) {
      // Si el producto ya existe, incrementa la cantidad
      this.carrito[index].cantidad++;
    } else {
      // Si el producto no existe, lo agrega al carrito
      this.carrito.push({producto, cantidad: 1});
    }
  
    this.cantidadCarrito++;
    this.total_plata+=producto.precio;
    this.carrito.push(producto);
  }

  public eliminarDelCarrito(producto: any) {
    const index = this.carrito.findIndex(x => x.nombre === producto.nombre);
    if(index != 0){
      this.carrito.splice(1,producto);
    }
  }

}
