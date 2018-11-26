import {Component, OnInit} from '@angular/core';
import {Alumno} from '../modelos/Alumno'
import { Router, ActivatedRoute, Params} from '@angular/router'; //importacion 
import { forEach } from '@angular/router/src/utils/collection';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Component({
    templateUrl:'./alumno.component.html',
    selector: 'alumno',
    styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit{
    // Propiedades
    public alumnos:Array<Alumno> = new Array<Alumno>();
    public alumnoSeleccionado:Alumno;
    public nuevoNombre:string;
    public bCodigo:boolean = false;
    public bExiste:boolean = false;
    // Constructor
    // constructor(){
    //     console.log("Alumno: Constructor ejecutado");
    //     this.alumnos = [
    //         new Alumno(1,"Daniel","C","0124",12),
    //         new Alumno(2,"Isaac","M","65",65),
    //         new Alumno(3,"Sebastian","G","555",65),
    //         new Alumno(4,"Foribundo","H","656",65),
    //         new Alumno(5,"Giovanna","V","6565",65),
    //         new Alumno(6,"Patty","F","65",65),
    //     ];
    //     console.log(this.alumnos);
    // }
    constructor(private _route:ActivatedRoute, private _router:Router){ //inyeccion por dependencia
        // console.log("Alumno: Constructor ejecutado");
        this.alumnos = [
            new Alumno(1,"Daniel","C","0124",12),
            new Alumno(2,"Isaac","M","65",65),
            new Alumno(3,"Sebastian","G","555",65),
            new Alumno(4,"Foribundo","H","656",65),
            new Alumno(5,"Giovanna","V","6565",65),
            new Alumno(6,"Patty","F","65",65),
        ];
        console.log(this.alumnos);
    }

    // Metodos
    ngOnInit():void{
        // forma 1 de recuperar un parametro por URL
        let pCodigo:any = this._route.snapshot.paramMap.get('codigo'); //_route: elemento tipo route, snapshot
        console.log(pCodigo);
        
        // let codigo = this._route.snapshot.paramMap.get('codigo'); 
        // if(codigo){
        //     this.alumnos.forEach(alumno => {
        //         if(alumno.alu_cod == codigo){
        //             this.bExiste = true;
        //             console.log(alumno);
        //         }
        //     });
        // }

        // forma 2 de recuperar un parametro por URL
        // this._route.params.subscribe(function(params:Params){ //subscribe es parecido a una promesa, es un observador
            // console.log(params.codigo);
            // console.log(params.nombre);
            // if(params.codigo){
                // this.bCodigo = true;
                // this.alumnos.forEach(element => {
                //     if(element.alu_cod == params.codigo){
                //         console.log("Alumno existe");
                //     }
                // });
    }

    public onSelect(objAlumno:Alumno):void{
        this.alumnoSeleccionado = objAlumno; //Cada vez que seleccione nuestra variable alumno sera igual al objeto alumno que acabo de seleccionar
        // this.bExiste = true;
    }

    public agregarNuevoAlumno():void{
        let objAlumnoTmo = new Alumno(10, this.nuevoNombre, "apellido", "10", 20);
        this.alumnos.push(objAlumnoTmo);
    }

    public verMasAlumno(alu_cod:string):void{ //para redireccionar
        let url = "/alumno/" + alu_cod;
        this._router.navigate([url]);
        this.analizarExistenciaAlumno();
    }

    public analizarExistenciaAlumno(){
        this.bExiste = true;
        let codigo = this._route.snapshot.paramMap.get('codigo'); 
        if(codigo){
            this.alumnos.forEach(alumno => {
                if(alumno.alu_cod == codigo){
                    this.bExiste = true;
                    console.log(alumno);
                }
            });
        }
    }
}