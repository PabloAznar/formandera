import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerarpaqueteComponent } from './generarpaquete/generarpaquete.component';
import { HomeComponent } from './home/home.component';
import { ListacursosComponent } from './listacursos/listacursos.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'cursos', component:ListacursosComponent},
  {path:'paquete', component:GenerarpaqueteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
