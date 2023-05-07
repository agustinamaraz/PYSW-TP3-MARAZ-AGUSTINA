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

  constructor() { 
    this.productos = [
      {nombre: 'notebook asus 13L', descripcion: 'disco 40GB, 15pulgadas', img: 'imagen1.jpg', precio: 160000, cantidad: 0},
      {nombre: 'Monitor LG 14', descripcion: 'texto descriptivo producto 02', img: 'imagen2.jpg', precio: 25000, cantidad: 0},
      {nombre: 'Monitor LG 55', descripcion: 'texto descriptivo producto 02', img: 'imagen3.jpg', precio: 30000,cantidad: 0},
      {nombre: 'Monitor HP', descripcion: 'texto descriptivo producto 02', img: 'imagen1.jpg', precio: 150000,cantidad: 0},
      {nombre: 'Monitor HP', descripcion: 'texto descriptivo producto 02', img: 'imagen2.jpg', precio: 17000,cantidad: 0},
      {nombre: 'Monitor HP', descripcion: 'texto descriptivo producto 02', img: 'imagen3.jpg', precio: 20000,cantidad: 0}
    ];

  }

  ngOnInit(): void {
  }

  public agregarAlCarrito(producto: any)
  {
    
    if(this.carrito.length === 0){ //primer producto que se agrega al carrito
      producto.cantidad=1;
      this.carrito.push(producto);
    }else{ // se aumenta la cantidad de un producto que ya está en el carrito desde la card
      const ENCONTRADO = this.carrito.find((x)=>{
        return producto.nombre === x.nombre;
      })
      if(ENCONTRADO){
        producto.cantidad+=1;
      }else{ //nuevo producto que se agrega al carrito
        producto.cantidad=1;
        this.carrito.push(producto);
      }
    }
    this.cantidadCarrito++;
  }

  eliminarProductoDelCarrito(producto:any){
    this.carrito = this.carrito.filter((x)=>{ //deja solo los productos que no tienen el nombre del producto a eliminar
      return producto.nombre != x.nombre;
    })
  }

  public actualizarUnidades(operacion:string,producto: any) {
    const PRODUCTO = this.carrito.find((x)=>{
      return x.nombre === producto.nombre;
    })

    if(PRODUCTO){
      if(operacion === 'quitar' && producto.cantidad > 0){
        producto.cantidad-=1;
        this.cantidadCarrito--;
      }
      if(operacion === 'agregar'){ // se agrega desde el modal
        producto.cantidad+=1;
        this.cantidadCarrito++;
      }
      if(producto.cantidad===0){
        this.eliminarProductoDelCarrito(producto);
      }
    }
  }

  public calcularTotal(){
    var total = this.carrito.reduce(function(contador,producto) { //reduce toma una variable la cual va ir iterando de acuerdo
      return contador + (producto.cantidad*producto.precio);     //a cada producto que se agrega al carrito.
    },0)
    return total;
  }

}
