import {Component} from '@angular/core';
import {Alumno} from '../modelos/Alumno'
@Component({
    templateUrl:'./alumno.component.html',
    selector: 'alumno',
    styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent{
    public alumnos:Array<Alumno>;
    
    // Constructor
    constructor(){
        console.log("Alumno: Constructor ejecutado");
        this.alumnos = [
            new Alumno(1,"Daniel","Cabana","0124",12),
            new Alumno(2,"Isaac","Cabana","0124",12),
            new Alumno(3,"Sebastian","Cabana","0124",12),
            new Alumno(4,"Giannella","Cabana","0124",12),
            new Alumno(5,"Giovanna","Cabana","0124",12),
            new Alumno(6,"","Cabana","0124",12),
        ];
        console.log(this.alumnos);
    }

    // Metodos

}