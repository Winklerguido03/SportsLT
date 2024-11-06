import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoProductosService {

  private jsonUrlFutbol = "assets/data/productosFutbol.json"
  private jsonUrlRunning= "assets/data/productosRunning.json"
  private jsonUrlEntrenamiento="assets/data/productosEntrenamiento.json"
  private jsonUrlModa="assets/data/productosModa.json"
  private jsonUrlBasquet="assets/data/productosBasquet.json"


  constructor(private http: HttpClient) {

   }
   
   getProductosFutbol(): Observable<any> {
    return this.http.get<any>(this.jsonUrlFutbol).pipe(
      catchError(error => {
        console.error('Error al cargar el archivo JSON de futbol', error);
        return throwError(() => new Error('No se pudo cargar el archivo JSON de Futbol'));
      })
    );
  }

  getProductosRunning(): Observable<any> {
    return this.http.get<any>(this.jsonUrlRunning).pipe(
      catchError(error => {
        console.error('Error al cargar el archivo JSON de Running', error);
        return throwError(() => new Error('No se pudo cargar el archivo JSON de Running'));
      })
    );
  }

  getProductosEntrenamiento(): Observable<any> {
    return this.http.get<any>(this.jsonUrlEntrenamiento).pipe(
      catchError(error => {
        console.error('Error al cargar el archivo JSON de Entrenamiento', error);
        return throwError(() => new Error('No se pudo cargar el archivo JSON de Entrenamiento'));
      })
    );
  }

  getProductosModa(): Observable<any> {
    return this.http.get<any>(this.jsonUrlModa).pipe(
      catchError(error => {
        console.error('Error al cargar el archivo JSON de Moda', error);
        return throwError(() => new Error('No se pudo cargar el archivo JSON de Moda'));
      })
    );
  }

  getProductosBasquet(): Observable<any> {
    return this.http.get<any>(this.jsonUrlBasquet).pipe(
      catchError(error => {
        console.error('Error al cargar el archivo JSON de Basquet', error);
        return throwError(() => new Error('No se pudo cargar el archivo JSON de Basquet'));
      })
    );
  }

}
