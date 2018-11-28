import { Injectable } from '@angular/core'; 
// al ser un proveedor http
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class AjaxService{
    constructor(public _http:HttpClient){

    } // Es un servicio que le da servicio a este servicio

    // metodos
    getJanet():Observable<any>{
        return this._http.get("https://reqres.in/api/users/2");
    }
    
    getUsuario(IdUsuario:string):Observable<any>{
        let cadena:string = "https://reqres.in/api/users/"+IdUsuario;
        // console.log(cadena);
        return this._http.get(cadena);
    }

    getUsuarios(NroPagina:string):Observable<any>{
        return this._http.get("https://reqres.in/api/users?page="+NroPagina);
    }
    
}