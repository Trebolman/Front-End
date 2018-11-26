import {Component} from '@angular/core';
import {Curso} from '../modelos/Curso'
import {CursoService} from '../servicios/curso.service.';

@Component({
    templateUrl:'./curso.component.html',
    selector: 'curso',
    providers: [CursoService] // proveedores de servicio
})
export class CursoComponent{
    public cursos:Array<Curso>;
    public titulo:string;
    constructor(private _cursoService:CursoService){
        // propiedades
        this.titulo = "Bienvenido al curso";
        this.cursos = _cursoService.getCursos(); //inyectando los cursos dentro del constructor
        // this.cursos = new Array<Curso>();
        // this.cursos = [
        //     new Curso(1, "Control automatico", 5, true),
        //     new Curso(2, "Electronica analoga", 2, true),
        //     new Curso(3, "Electronica digital", 4, true),
        //     new Curso(4, "Radioenlaces", 5, true),
        //     new Curso(5, "Microprogramacion de microcontroladores", 5, true),
        //     new Curso(6, "Informática", 3, true),
        //     new Curso(7, "HTML", 3, false),
        //     new Curso(8, "Arquitectura de computadoras", 6, false),
        // ];
        // console.log(this.cursos);
    }
    // metodos
    public mostrarTitulo(){
        alert(this.titulo);
    }
    public onBlur(){
        console.log("Saliste del input");
    }

    public onKeyUp(){
        console.log("Presionaste");
    }
}