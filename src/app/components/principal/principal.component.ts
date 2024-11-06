import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BtnVerMasComponent } from "../btn-ver-mas/btn-ver-mas.component";
import { SeccionFutbolComponent } from "../seccion-futbol/seccion-futbol.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, RouterLink, BtnVerMasComponent, SeccionFutbolComponent,RouterOutlet],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent{
  imagenes = [
    "../../assets/imgMarcas/logoAdidas.png",
    "../../assets/imgMarcas/logoNike.png",
    "../../assets/imgMarcas/logoPuma.png",
    "../../assets/imgMarcas/logoFila.png",
    "../../assets/imgMarcas/logoKappa.png",
    "../../assets/imgMarcas/logoReebok.png",
    "../../assets/imgMarcas/logoTopper.png",
    "../../assets/imgMarcas/logoWilson.png",
   ]

  seccionFutbolActiva:boolean=true;

  ocultarSeccion() {
    this.seccionFutbolActiva = false;
  }
}

