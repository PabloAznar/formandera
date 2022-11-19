import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  logged : boolean = false;

  constructor() { }

  isLogged() {
    return this.logged;
  }

  iniciar_sesion() {
    this.logged = true;
  }

  cerrar_sesion() {
    this.logged = false;
  }

}
