import {Component} from '@angular/core';

@Component({
    selector: 'curso',
    templateUrl: './curso.component.html'
})

export class cursoComponent{
    public nombreCurso:string = "Angular 7";
    constructor(){
        console.log("Curso: constructor de componente");
    }
}