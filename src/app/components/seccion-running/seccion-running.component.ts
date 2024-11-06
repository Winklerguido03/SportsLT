import { Component } from '@angular/core';
import { Producto } from '../../modelos/producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seccion-running',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seccion-running.component.html',
  styleUrl: './seccion-running.component.css'
})
export class SeccionRunningComponent {

  productos:Producto[] = [
    {
      nombre: 'Remera Adidas',
      precio: 40000,
      imagen: '../../assets/ProductosRunning/remera.jpg',
    },
    {
      nombre: 'Remera Blanca',
      precio: 40000,
      imagen: '../../assets/ProductosRunning/remera2.jpg',
    },
    {
      nombre: 'Short Azul',
      precio: 30000,
      imagen: '../../assets/ProductosRunning/short.jpg',
    },
    {
      nombre: 'Zapas Reebok',
      precio: 125000,
      imagen: '../../assets/ProductosRunning/zapas.jpg',
    },
    {
      nombre: 'Zapas Reebok 2',
      precio: 120000,
      imagen: '../../assets/ProductosRunning/zapas2.jpg',
    }
  ];
}
