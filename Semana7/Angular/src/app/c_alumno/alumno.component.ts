import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno';
import { Router, ActivatedRoute, Params} from '@angular/router';
@Component({
    templateUrl:'./alumno.component.html',
    selector:'alumno',
    styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit{
    //propiedades
    public alumnos:Array<Alumno> = new Array<Alumno>();
    public alumnoSeleccionado:Alumno;
    public nuevoNombre:string;
    public bCodigo:boolean = false;
    public bExiste:boolean = false;
    //constructor
    constructor(private _route:ActivatedRoute, private _router:Router){
        this.alumnos = [
            new Alumno(1,"Jorge","Garnica","1001",25),
            new Alumno(2,"Carlos","Garcia","1002",32),
            new Alumno(3,"Juan","Roldán","1003",19),
            new Alumno(4,"Felipe","Cuadros","1004",25),
            new Alumno(5,"Fernanda","Esquivel","1005",25),
        ];
        console.log("Alumno: Contructor ejecutado");
        console.log(this.alumnos);
    }
    //metodos
    public onSelect(objAlumno: Alumno):void{
        this.alumnoSeleccionado = objAlumno;
    }
    public agregarNuevoAlumno():void{
        let objAlumnoTmp = new Alumno(10,this.nuevoNombre,"Apellido","1010",0);
        this.alumnos.push(objAlumnoTmp);
    }

    ngOnInit():void{
        //FORMA 1 de recuperar un parámetro por URL
        // let codigo = this._route.snapshot.paramMap.get('codigo');
        
        //FORMA 2 de recuperar un parámetro por URL
        // this._route.params.subscribe(function(params:Params){
        //     console.log(params.codigo);
        // });
    }

    public verMasAlumno(alu_cod:string):void{
        let url:string = "/alumno/"+alu_cod;
        this._router.navigate([url]);
        // this.analizarAlumno();
        console.log(this._route.snapshot.paramMap.get('codigo'));
    }

    public analizarAlumno(){
        this.bExiste = false;
        let codigo = this._route.snapshot.paramMap.get('codigo');
        if(codigo){
            this.alumnos.forEach(alumno=>{
                if(alumno.alu_cod == codigo){
                    this.bExiste = true;
                    console.log(alumno);
                }
            });
        }
    }
}