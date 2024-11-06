import { Component } from '@angular/core';
import { Producto } from '../../modelos/producto';
import { CommonModule } from '@angular/common';
import { InfoProductosService } from '../../servicios/info-productos.service';

@Component({
  selector: 'app-seccion-moda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seccion-moda.component.html',
  styleUrl: './seccion-moda.component.css'
})
export class SeccionModaComponent {

  listaProductos : Producto [] = []

constructor(private svcProducto: InfoProductosService){}

ngOnInit(): void {
  this.cargarProductos();
}

cargarProductos(): void {
  this.svcProducto.getProductosModa().subscribe({
    next: (data) => {
      this.listaProductos = data;
      console.log(JSON.stringify( this.listaProductos));
    },
    error: (error)=>{
      console.error('Error al cargar la info de moda', error);
    }

  })

}
 
}
