import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {data} from 'autoprefixer';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export class RegisterComponent {
  constructor(private service:ApiService, private router:Router) {
  }
  FormRegistro= new FormGroup({
   names: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    carrera: new FormControl('', Validators.required),
  })

  guardar() {
    let data = this.FormRegistro.getRawValue();
    let date={
      names:data.names,
      lastName:data.lastName,
      password:data.password,
      email:data.email,
      phone:data.phone,
      carrera:data.carrera,
      username:data.email
    }
    this.service.registrar(date).subscribe(value => {
      alert("Usuario registrado")
      this.router.navigate(['/login'])
    })
}}
