import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {EmprendimientosComponent} from './pages/emprendimientos/emprendimientos.component';
import {ContactanosComponent} from './pages/contactanos/contactanos.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {loginGuard} from './guards/login.guard';
import {authGuard} from './guards/auth.guard';
import {PerfilUserComponent} from './pages/perfil-user/perfil-user.component';

let PerfilComponent;
export const routes: Routes = [

  {
    path:'',loadChildren:()=>import('./main/main.module').then(m=>m.MainModule)
  }
];
