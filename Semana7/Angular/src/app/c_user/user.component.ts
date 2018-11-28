import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../servicios/ajax.service';

@Component({
    templateUrl: './user.component.html',
    selector: 'user',
    providers: [AjaxService]
})
export class UserComponent implements OnInit{
    public janet:any;
    constructor(private _ajaxService:AjaxService) {
        
    }
    public ngOnInit():void{
        this._ajaxService.getJanet().subscribe(
            result=>{
                this.janet = result.data;
            }, error=>{
                console.log(error);
            });
    }
}