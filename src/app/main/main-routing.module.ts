import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {EmprendimientosComponent} from '../pages/emprendimientos/emprendimientos.component';
import {ContactanosComponent} from '../pages/contactanos/contactanos.component';
import {LoginComponent} from '../pages/login/login.component';
import {loginGuard} from '../guards/login.guard';
import {RegisterComponent} from '../pages/register/register.component';
import {PerfilUserComponent} from '../pages/perfil-user/perfil-user.component';
import {authGuard} from '../guards/auth.guard';
import {DetallesEmprendimientoComponent} from '../pages/detalles-emprendimiento/detalles-emprendimiento.component';

const routes: Routes = [  {path : '', redirectTo:'/home', pathMatch:'full'},
  {path : 'home', component :HomeComponent},
  {path:'emprendimientos',component: EmprendimientosComponent,},
  {path:'contactanos', component:ContactanosComponent, },
  {path: 'login', component:LoginComponent,canActivate:[loginGuard]},
  {path: 'registro',component:RegisterComponent,canActivate:[loginGuard]},
  {path:'mi-perfil',component:PerfilUserComponent,canActivate:[authGuard]},
    {path:'detallesEmprendimientos/:id',component:DetallesEmprendimientoComponent}]
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
