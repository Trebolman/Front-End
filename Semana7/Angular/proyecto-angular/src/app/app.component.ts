import { Component } from '@angular/core';
import { Calzado } from './modelos/calzado';

// Decorador
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Mi primer proyecto en AngularJS';
  subtitle = "Hoy Perú gana csm. Naaa, perdimos ptm!";
  flagAlumno:boolean = true;
  calzados:Array<Calzado>;
  
  constructor(){
    this.calzados = [
      new Calzado("Adidas",323.2,"Runner",true,"red"),
      new Calzado("Nike",124.25,"Runner",true,"orangered"),
      new Calzado("Reebok",132.1,"Runner",true,"blue"),
      new Calzado("Tigre",132.1,"Runner",true,"yellow"),
      new Calzado("Walon",132.1,"Runner",true,"gray"),
      new Calzado("Adidas",132.1,"Runner",true,"green"),
      new Calzado("Adidas",132.1,"Runner",true,"black"),
    ]  
  }
  // metodos
  public toggleAlumno(){
    // if(this.flagAlumno){
    //   this.flagAlumno = false;
    // }
    this.flagAlumno = this.flagAlumno?false:true;
  }
}
