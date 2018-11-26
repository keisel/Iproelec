import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./paginas/dashboard/dashboard.component";
import { DatosLaboralesComponent } from './paginas/datos-laborales/datos-laborales.component';
import { ColaboradoresComponent } from './paginas/colaboradores/colaboradores.component';
import { DatosPersonalesComponent } from './paginas/datos-personales/datos-personales.component';
import { FichasPersonalComponent } from './paginas/fichas-personal/fichas-personal.component';
import { SesionComponent } from './paginas/sesion/sesion.component';
import { CursosComponent } from './paginas/cursos/cursos.component';



const app_routes: Routes = [
    { path: "home", component: DashboardComponent },
    { path: "datos-laborales", component: DatosLaboralesComponent },
    { path: "colaboradores", component: ColaboradoresComponent },
    { path: "datos-personales", component: DatosPersonalesComponent },
    { path: "fichas-personal", component: FichasPersonalComponent },
    { path: "sesion", component: SesionComponent },
    { path: "cursos", component: CursosComponent },
    { path: "**", pathMatch: "full",  redirectTo: "home" }


];
 
 @NgModule({
    
    imports:[

        RouterModule.forRoot (app_routes, {useHash : true})
    ],
    exports:[
        RouterModule
    ]


 })
 export class AppRoutingModule { }