import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../servicios/ajax.service';

@Component({
    // templateUrl: './user.component.html',
    templateUrl: './user.component.html',
    selector: "user",
    providers: [AjaxService]
})

export class UserComponent implements OnInit{
    public NroPagina:string;
    public IdUsuario:string;
    public Usuario:any;
    public Usuarios:Array<any>;
    constructor(private _ajaxService:AjaxService){

    }
    public ngOnInit():void{
        // this._ajaxService.getJanet().subscribe(result=>{
        //     // console.log(result.data);
        //     this.janet = result.data; //la data del resultado
        //     // console.log(this.janet);
        // },error=>{
        //     console.log(error);
        // });
        // this._ajaxService.getUsuario('2').subscribe(result=>{
        //         console.log(result.data);
        //         // this.janet = result.data; //la data del resultado
        //         // console.log(this.janet);
        //     },error=>{
        //         console.log(error);
        //     });
    }

    public MostrarUsuario():void{
        this._ajaxService.getUsuario(this.IdUsuario).subscribe(result=>{
            console.log(result.data);
            this.Usuario = result.data;
            console.log(this.Usuario);
        }, error=>{
            console.log("Error en resultado");
        });
    }

    public MostrarUsuarios():void{
        this._ajaxService.getUsuarios(this.NroPagina).subscribe(result=>{
            console.log(result.data);
            this.Usuarios = result.data;
        });
    }

}