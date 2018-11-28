import { Injectable } from '@angular/core';
import { Curso } from '../modelos/curso';

@Injectable()
export class CursoService{
    public cursos:Array<Curso>;
    constructor(){
        this.cursos = [
            new Curso(1,"Algoritmos y Estructura de Datos",4,true),
            new Curso(2,"Sistemas Operativos",5,true),
            new Curso(3,"Base de Gatos",4,true),
            new Curso(4,"SCRUM - Patrick Style",1.5,false),
            new Curso(5,"HTML",3,false),
            new Curso(6,"Mineria de Gatos",6,true),
        ];
    }
    
    public getCursos():Array<Curso>{
        return this.cursos;
    }
}