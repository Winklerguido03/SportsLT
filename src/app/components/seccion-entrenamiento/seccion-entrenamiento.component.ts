import { Component } from '@angular/core';
import { Producto } from '../../modelos/producto';
import { CommonModule } from '@angular/common';
import { InfoProductosService } from '../../servicios/info-productos.service';

@Component({
  selector: 'app-seccion-entrenamiento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seccion-entrenamiento.component.html',
  styleUrl: './seccion-entrenamiento.component.css'
})
export class SeccionEntrenamientoComponent {

  listaProductos : Producto [] = []

  constructor(private svcProducto: InfoProductosService){}
  
  ngOnInit(): void {
    this.cargarProductos();
  }
  
  cargarProductos(): void {
    this.svcProducto.getProductosEntrenamiento().subscribe({
      next: (data) => {
        this.listaProductos = data;
        console.log(JSON.stringify( this.listaProductos));
      },
      error: (error)=>{
        console.error('Error al cargar la info de entrenamiento', error);
      }
  
    })
  }

}
