import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { routing, appRoutingProviders} from './app.routing';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CursoComponent } from './c_curso/curso.component';
import { AlumnoComponent } from './c_alumno/alumno.component';
import { InicioComponent } from './c_inicio/inicio.component';
import { UserComponent } from './c_user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    AlumnoComponent,
    InicioComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
