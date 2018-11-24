import {Component} from '@angular/core';
import {Alumno} from '../modelos/Alumno'
@Component({
    templateUrl:'./alumno.component.html',
    selector: 'alumno',
    styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent{
    public alumnos:Array<Alumno>;
    public alumnoSeleccionado:Alumno;
    // Constructor
    constructor(){
        console.log("Alumno: Constructor ejecutado");
        this.alumnos = [
            new Alumno(1,"Daniel","C","0124",12),
            new Alumno(2,"Isaac","M","65",65),
            new Alumno(3,"Sebastian","G","555",65),
            new Alumno(4,"Foribundo","H","656",65),
            new Alumno(5,"Giovanna","V","6565",65),
            new Alumno(6,"sdsdsa","F","65",65),
        ];
        console.log(this.alumnos);
    }

    // Metodos
    public onSelect(objAlumno:Alumno):void{
        this.alumnoSeleccionado = objAlumno; //Cada vez que seleccione nuestra variable alumno sera igual al objeto alumno que acabo de seleccionar
    }
}