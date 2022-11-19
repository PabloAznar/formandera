import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface IRegisterForm {
  email: string;
  nombre: string;
  apellidos: string;
  fechaNacimiento: string;
  pais: string;
  clave: string;
  repetirClave: string;
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registro: IRegisterForm = {
    email: "",
    nombre: "",
    apellidos: "",
    fechaNacimiento: "",
    pais: "",
    clave:"",
    repetirClave:""
  };

  registroOk: boolean = true;

  constructor(private route: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    if(this.isInvalidForm())
      this.registroOk = false;
    else
      this.route.navigate(['login']);
  }

  onCancel() {
    this.route.navigate(['']);
  }

  private isInvalidForm() {
    return (this.registro.email === "" ||
      this.registro.nombre === "" ||
      this.registro.apellidos === "" ||
      this.registro.fechaNacimiento === "" ||
      this.registro.pais === "" ||
      this.registro.clave === "" ||
      this.registro.repetirClave === "")
  }

}
