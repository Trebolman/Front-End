import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { settings } from "../modelos/configuracion"; //Importamos el Json
import { Institucion } from "../modelos/Institucion"; //Importamos la clase institucion
@Component({
  selector: 'alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.sass']
})
export class AlumnoComponent implements OnInit, DoCheck, OnDestroy {
  public titulo:string = "Titulo inicial de alumno";
  public config = settings;
  public miInstitucion:Institucion;
  public misInstituciones:Array<Institucion>;
  constructor() { 
    this.miInstitucion = new Institucion("TrebolSoft","Flora Tristan", "1234567890",2012);
    this.misInstituciones = [
      this.miInstitucion,
      new Institucion("Tecsup","Arequipa","1454631345",1992),
      new Institucion("UNSA","Arequipa","6664545646",2015),
      new Institucion("Catolica","Arequipa","6664545646",2018),
    ];
    console.log("Alumno: Constructor de componente");
  }

  ngOnInit() {
    console.log("Alumno: Se ha ejecutado el evento onInit");
    
    console.log(this.miInstitucion);
    console.log(this.misInstituciones);
  }

  ngDoCheck(){
    console.log("Alumno: Se ha ejecutado el evento DoCheck");
  }

  ngOnDestroy(){
    console.log("Alumno: Se ha ejecutado el evento OnDestroy"); //Se ejecuta cuando lo saquemos de quien lo invoca, en este caso de App-route
  }

  // metodos
  public cambiarTitulo(){
    this.titulo = "Titulo del alumno cambiado";
  }

}
// onInit se ejecuta cuando se crea
// Docheck cuando el componente cambia
// OnDestroy se ejecuta cuando el componente es retirado de la vista