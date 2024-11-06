import { Component } from '@angular/core';
import { Producto } from '../../modelos/producto';
import { InfoProductosService } from '../../servicios/info-productos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seccion-basquet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seccion-basquet.component.html',
  styleUrl: './seccion-basquet.component.css'
})
export class SeccionBasquetComponent {
  
  listaProductos : Producto [] = []

constructor(private svcProducto: InfoProductosService){}

ngOnInit(): void {
  this.cargarProductos();
}

cargarProductos(): void {
  this.svcProducto.getProductosBasquet().subscribe({
    next: (data) => {
      this.listaProductos = data;
      console.log(JSON.stringify( this.listaProductos));
    },
    error: (error)=>{
      console.error('Error al cargar la info de Basquet', error);
    }

  })

}
}
