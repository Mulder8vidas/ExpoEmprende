import { Component } from '@angular/core';
import {PerfilInfoComponent} from '../../components/perfil-info/perfil-info.component';
import {NegocioInfoComponent} from '../../components/negocio-info/negocio-info.component';
import {NgClass, NgSwitch, NgSwitchCase} from '@angular/common';

@Component({
  selector: 'app-perfil-user',
  standalone: true,
  imports: [
    PerfilInfoComponent,
    NegocioInfoComponent,
    NgClass,
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './perfil-user.component.html',
  styleUrl: './perfil-user.component.css'
})
export class PerfilUserComponent {
  estado: number = 1;

  changeState(estado: number) {
    this.estado=estado;
  }
}
