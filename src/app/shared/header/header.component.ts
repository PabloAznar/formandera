import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/loginservice.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedValue! : string;
  constructor(private servicioLogin : LoginserviceService, private route : Router) {}

  ngOnInit(): void {
  }

  isLogged() {
    return this.servicioLogin.isLogged();
  }

  cerrar_sesion() {
    this.servicioLogin.cerrar_sesion();
    this.route.navigate(['']);
  }

  iniciar_sesion() {
    this.route.navigate(['login']);
  }

  registro() {
    this.route.navigate(['registro']);
  }

  onSelect() {
    this.route.navigate(['paquete'])
  }

}
