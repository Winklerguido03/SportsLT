import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelos/producto';
import { CommonModule } from '@angular/common';
import { InfoProductosService } from '../../servicios/info-productos.service';

@Component({
  selector: 'app-seccion-futbol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seccion-futbol.component.html',
  styleUrl: './seccion-futbol.component.css'
})
export class SeccionFutbolComponent{

listaProductos : Producto [] = []

constructor(private svcProducto: InfoProductosService){}

ngOnInit(): void {
  this.cargarProductos();
}

cargarProductos(): void {
  this.svcProducto.getProductosFutbol().subscribe({
    next: (data) => {
      this.listaProductos = data;
      console.log(JSON.stringify( this.listaProductos));
    },
    error: (error)=>{
      console.error('Error al cargar la info de futbol', error);
    }

  })

}

}
