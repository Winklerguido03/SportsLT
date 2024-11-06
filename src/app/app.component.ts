import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from "./components/encabezado/encabezado.component";
import { PrincipalComponent } from "./components/principal/principal.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SeccionFutbolComponent } from "./components/seccion-futbol/seccion-futbol.component";
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { BtnVerMasComponent } from "./components/btn-ver-mas/btn-ver-mas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EncabezadoComponent, PrincipalComponent, FooterComponent, SeccionFutbolComponent, CommonModule, BtnVerMasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoProgramacion';


}
