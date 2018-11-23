import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// registro de componentes
import { AppComponent } from './app.component';
import { cursoComponent } from './curso/curso.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { CarreraComponent } from './carrera/carrera.component';

@NgModule({
  declarations: [
    AppComponent,
    cursoComponent,
    AlumnoComponent,
    CarreraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
