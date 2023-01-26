import { Component } from '@angular/core';
import { Iestudiante } from 'src/app/models/Iestudiante';

@Component({
  selector: 'app-listado-estudiantes',
  templateUrl: './listado-estudiantes.component.html',
  styleUrls: ['./listado-estudiantes.component.css']
})
export class ListadoEstudiantesComponent {
comision:string = "40510";
listaEstudiantes: Array<Iestudiante> = [
  {
    nombre:"Juan",
    apellido: "Lopez",
    edad:30,
    isActive:true
  },
  {
    nombre:"Julia",
    apellido: "Aragon",
    edad:28,
    isActive:true
  },
  {
    nombre:"Nestor",
    apellido: "Canales",
    edad:21,
    isActive:false
  },
  {
    nombre:"Laura",
    apellido: "Sanchez",
    edad:19,
    isActive:true
  },
  {
    nombre:"Sergio",
    apellido: "Reguerio",
    edad:27,
    isActive:false
  },
]
}
