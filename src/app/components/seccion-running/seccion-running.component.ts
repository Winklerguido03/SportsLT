import { Component } from '@angular/core';
import { Producto } from '../../modelos/producto';
import { CommonModule } from '@angular/common';
import { InfoProductosService } from '../../servicios/info-productos.service';

@Component({
  selector: 'app-seccion-running',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seccion-running.component.html',
  styleUrl: './seccion-running.component.css'
})
export class SeccionRunningComponent {

  listaProductos : Producto [] = []

  constructor(private svcProducto: InfoProductosService){}
  
  ngOnInit(): void {
    this.cargarProductos();
  }
  
  cargarProductos(): void {
    this.svcProducto.getProductosRunning().subscribe({
      next: (data) => {
        this.listaProductos = data;
        console.log(JSON.stringify( this.listaProductos));
      },
      error: (error)=>{
        console.error('Error al cargar la info de running', error);
      }
  
    })
  
  }

}
