import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { AlumnoComponent } from './c_alumno/alumno.component';
import { CursoComponent } from './c_curso/curso.component';
import { InicioComponent } from './c_inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    CursoComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
