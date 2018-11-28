import { Component, OnInit } from '@angular/core';
import { Curso } from '../modelos/curso';
import { CursoService} from '../servicios/curso.service';

@Component({
    templateUrl:'./curso.component.html',
    selector:'curso',
    providers:[CursoService]
})
export class CursoComponent implements OnInit{
    //Propiedades
    
    public titulo:string ="Bienvenido al componente Curso";
    public cursos:Array<Curso>;
    constructor(private _cursoService:CursoService){
        this.titulo = "Bienvenido al componente Curso";
        this.cursos = _cursoService.getCursos();
    }
    ngOnInit(){
        
    }
    //Metodos
    public mostrarTitulo(){
        alert (this.titulo);
    }
    public onBlur(){
        console.log("Saliste del Input");
    }
    public onKeyUp(){
        alert(this.titulo);
    }
    
}