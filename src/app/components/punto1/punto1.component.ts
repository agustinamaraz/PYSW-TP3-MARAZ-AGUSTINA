import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  openAlert:boolean=false;
  productos: Array<any>;
  carrito: Array<any> = [];
  cantidadCarrito: number=0;

  constructor() { 
    this.productos = [
      {nombre: 'notebook asus 13L', descripcion: 'disco 40GB, 15pulgadas', img: 'imagen1.jpg', precio: 45.5, cantidad: 0},
      {nombre: 'Monitor LG 14', descripcion: 'texto descriptivo producto 02', img: 'imagen2.jpg', precio: 100, cantidad: 0},
      {nombre: 'Monitor LG 55', descripcion: 'texto descriptivo producto 02', img: 'imagen3.jpg', precio: 150,cantidad: 0},
      {nombre: 'Monitor HP', descripcion: 'texto descriptivo producto 02', img: 'imagen1.jpg', precio: 160,cantidad: 0},
      {nombre: 'Monitor HP', descripcion: 'texto descriptivo producto 02', img: 'imagen2.jpg', precio: 170,cantidad: 0},
      {nombre: 'Monitor HP', descripcion: 'texto descriptivo producto 02', img: 'imagen3.jpg', precio: 200,cantidad: 0}
    ];

  }

  ngOnInit(): void {
  }

  public agregarAlCarrito(producto: any)
  {
    this.openAlert=true;
    
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
    const ELIMINADO = this.carrito.find((x)=>{
      return x.nombre === producto.nombre;
    })

    if(ELIMINADO){
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
    const total = this.carrito.reduce(function(contador,producto) {
      return contador + (producto.cantidad*producto.precio);
    },0)
    return total;
  }

}
