import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {data} from 'autoprefixer';
import {ApiService} from '../../services/api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-perfil-info',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './perfil-info.component.html',
  styleUrl: './perfil-info.component.css'
})
export class PerfilInfoComponent {
  constructor(private apiService:ApiService) {
    this.cargarMisDatos();
  }
  FormPerfil= new FormGroup({
    nombre :new FormControl('',Validators.required),
    apellido:new FormControl('',Validators.required),
    telefono:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    carrera:new FormControl('',Validators.required),
  })

  cargarMisDatos(){
    this.FormPerfil.disable();


    //{
    //         "id": 1,
    //         "username": "user12313",
    //         "password": "$2a$10$Mn3qgrKM9UobmnKM82Z8..bit0hfWOapRZU6EyKA9dBs3E9sJ9rs2",
    //         "name": "Johns",
    //         "lastName": "Does",
    //         "email": "user1223@example.com",
    //         "phone": "987654321",
    //         "carrera": "Ing. Sistemas",
    //         "role": "USER",
    //         "createAt": "2024-10-25T06:21:44.635+00:00",
    //         "moduleEntities": []
    //     }

   this.apiService.cargarMisDatos().subscribe(value => {


     this.FormPerfil.setValue({
        nombre:value.data.name,
        apellido:value.data.lastName,
        telefono:value.data.phone,
        email:value.data.email,
        carrera:value.data.carrera
      })


   })



  }
}
