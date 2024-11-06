import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelos/producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seccion-futbol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seccion-futbol.component.html',
  styleUrl: './seccion-futbol.component.css'
})
export class SeccionFutbolComponent{

  productos:Producto[] = [
    {
      nombre: 'Botin F5 Topper',
      precio: 70000,
      imagen: '../../assets/ProductosFutbol/botin f5 topper.jpg',
    },
    {
      nombre: 'Botin Nike Legend',
      precio: 85000,
      imagen: '../../assets/ProductosFutbol/botin nike legend.jpg',
    },
    {
      nombre: 'Botin Futbol Reebok',
      precio: 75000,
      imagen: '../../assets/ProductosFutbol/botin reebok.jpg',
    },
    {
      nombre: 'Guantes de arquero Reebok',
      precio: 55000,
      imagen: '../../assets/ProductosFutbol/guante blanco reebok.jpg',
    },
    {
      nombre: 'Guantes de arquero Reebok',
      precio: 55000,
      imagen: '../../assets/ProductosFutbol/guantes de arquero reebok.jpg',
    }
  ];

}
