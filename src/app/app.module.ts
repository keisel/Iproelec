import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { DatosLaboralesComponent } from './paginas/datos-laborales/datos-laborales.component';
import { ColaboradoresComponent } from './paginas/colaboradores/colaboradores.component';
import { DatosPersonalesComponent } from './paginas/datos-personales/datos-personales.component';
import { FichasPersonalComponent } from './paginas/fichas-personal/fichas-personal.component';
import { SesionComponent } from './paginas/sesion/sesion.component';
import { CursosComponent } from './paginas/cursos/cursos.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    DatosLaboralesComponent,
    ColaboradoresComponent,
    DatosPersonalesComponent,
    FichasPersonalComponent,
    SesionComponent,
    CursosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
