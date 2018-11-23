import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.sass']
})
export class CarreraComponent implements OnInit {
  public nombre:string = "Ingeniería informática";
  public duracion:number = 7;
  constructor() { 
    console.log("Carrera: Se llamó al constructor")
  }

  ngOnInit() {
  }

}
