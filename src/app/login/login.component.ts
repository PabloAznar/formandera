import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  clave: string = '';
  loginOk: boolean = true;

  constructor(private servicioLogin : LoginserviceService, private route : Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    if(this.isInvalidForm())
      this.loginOk = false;
    else {
      this.loginOk = true;
      this.servicioLogin.iniciar_sesion();
      this.route.navigate(['cursos']);
    }
  }

  onCancel() {
    this.route.navigate(['']);
  }

  isInvalidForm() {
    return (this.email === '' ||
      this.clave === '')
  }

}
