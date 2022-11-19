import { Time } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface DialogData {
  name: string;
}

interface IRegisterForm {
  fechaInicio: string;
  materias_seleccionadas : string[];
  nivel : string;
  inicio: string;
  fin: string;
  horas: string;
  duracion: string;
}

@Component({
  selector: 'app-generarpaquete',
  templateUrl: './generarpaquete.component.html',
  styleUrls: ['./generarpaquete.component.css']
})
export class GenerarpaqueteComponent implements OnInit {

  name: string = "Comprar paquete";

  listaMaterias : string[] = [
    "Introducción a la programación",
    "Lógica",
    "Álgebra",
    "Cálculo",
    "Programación orientada a objetos",
    "Bases de datos",
    "Desarrollo web",
    "Aplicaciones distribuidas",
    "Interfaces de usuario",
    "Sistemas operativos I",
    "Sistemas operativos II",
    "Redes de comunicaciones",
    "Arquitectura de redes",
    "Servicios telemáticos",
    "Procesos de desarrollo de software"
  ]

  materias = new FormControl('');

  niveles : string[] = ["básico","intermedio","avanzado"]

  registro: IRegisterForm = {
    fechaInicio: '',
    materias_seleccionadas: [],
    nivel: '',
    inicio: '',
    fin: '',
    horas: '',
    duracion: ''
  };

  registroOk = true;

  constructor(public dialog: MatDialog, private route: Router) { }

  ngOnInit(): void {

  }

  comprarPaquete() {
    if(this.isFormInvalid())
      this.registroOk = false;
    else {
      this.registroOk = true;
      const dialogRef = this.dialog.open(DialogComprar, {
        width: '250px',
        data: {name: this.name}
      });

      dialogRef.afterClosed().subscribe(result => {
        this.gotoMain();
      });
    }
  }

  gotoMain() {
    this.route.navigate(['cursos']);
  }

  private isFormInvalid() {
    return (this.registro.fechaInicio === '' ||
      this.registro.materias_seleccionadas.length === 0 ||
      this.registro.nivel === '' ||
      this.registro.inicio === '' ||
      this.registro.fin === '' ||
      this.registro.horas === '' ||
      this.registro.duracion === '');
  }

}

@Component({
  selector: 'dialog-comprar',
  templateUrl: 'dialog-comprar.html',
})
export class DialogComprar {
  constructor(
    public dialogRef: MatDialogRef<DialogComprar>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onClick(): void {
    this.dialogRef.close();
  }
}
