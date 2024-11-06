import { url } from "inspector";
import { Imagen } from "./imagen";

export interface Producto {
    nombre:string;
    imagen:Imagen;
    precio:number;
}
