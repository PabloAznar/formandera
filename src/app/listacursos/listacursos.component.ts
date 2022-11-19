import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface TablaCurso {
  curso: string;
  fechaInicio: String;
  estado: string;
}

const TABLE_ELEMENTS : TablaCurso[] = [
  {curso: 'Curso 1',fechaInicio: new Date("2022-09-01").toDateString(),estado: "Sin valorar"},
  {curso: 'Curso 2',fechaInicio: new Date("2022-09-10").toDateString(),estado: "Sin valorar"},
  {curso: 'Curso 3',fechaInicio: new Date("2022-09-15").toDateString(),estado: "Sin valorar"},
  {curso: 'Curso 4',fechaInicio: new Date("2022-09-25").toDateString(),estado: "Sin valorar"},
  {curso: 'Curso 5',fechaInicio: new Date("2022-10-01").toDateString(),estado: "Sin valorar"},
  {curso: 'Curso 6',fechaInicio: new Date("2022-10-10").toDateString(),estado: "Sin valorar"},
  {curso: 'Curso 7',fechaInicio: new Date("2022-12-10").toDateString(),estado: "Sin valorar"}
]

@Component({
  selector: 'app-listacursos',
  templateUrl: './listacursos.component.html',
  styleUrls: ['./listacursos.component.css']
})
export class ListacursosComponent implements OnInit {

  columnas: string[] = ['curso', 'fechaInicio', 'estado'];
  datos = TABLE_ELEMENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
