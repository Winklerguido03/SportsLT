import { Routes } from '@angular/router';
import { SeccionHombresComponent } from './components/seccion-hombres/seccion-hombres.component';
import { SeccionFutbolComponent } from './components/seccion-futbol/seccion-futbol.component';

export const routes: Routes = [

{
    path:"seccionFutbol",component:SeccionFutbolComponent,
},

{
    path:"seccionRunning",
        loadComponent: ()=> import("../app/components/seccion-running/seccion-running.component").then(a=>a.SeccionRunningComponent),
},

{
    path:"seccionEntrenamiento",
        loadComponent: ()=> import("../app/components/seccion-entrenamiento/seccion-entrenamiento.component").then(a=>a.SeccionEntrenamientoComponent),
},

{
    path:"seccionModa",
        loadComponent: ()=> import("../app/components/seccion-moda/seccion-moda.component").then(a=>a.SeccionModaComponent),
},

{
    path:"seccionBasquet",
        loadComponent: ()=> import("../app/components/seccion-basquet/seccion-basquet.component").then(a=>a.SeccionBasquetComponent),
},

{
    path:"seccionHombres",
    loadComponent: ()=> import("../app/components/seccion-hombres/seccion-hombres.component").then(a=>a.SeccionHombresComponent),
},

{
    path:"seccionMujeres",
    loadComponent: ()=> import("../app/components/seccion-mujeres/seccion-mujeres.component").then(a=>a.SeccionMujeresComponent),
},

{
    path:"seccionNiños",
    loadComponent: ()=> import("../app/components/seccion-kids/seccion-kids.component").then(a=>a.SeccionKidsComponent),
},

{
    path:"seccionMarcas",
    loadComponent: ()=> import("../app/components/seccion-marcas/seccion-marcas.component").then(a=>a.SeccionMarcasComponent),
}
];
