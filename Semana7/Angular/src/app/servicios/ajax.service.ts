import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AjaxService{
    constructor(public _http:HttpClient){
    
    }
    getJanet():Observable<any>{
        return this._http.get("https://reqres.in/api/users/3");
    }
}