import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-negocio-info',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './negocio-info.component.html',
  styleUrl: './negocio-info.component.css'
})
export class NegocioInfoComponent {


  imagenes: any[] = [];

  FormNegocio = new FormGroup({
    nombreNegocio: new FormControl('', Validators.required),
    ruc: new FormControl('', Validators.required),
    descripcion: new FormControl(),
    telefono: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    rubro: new FormControl('', Validators.required),
    imagenes: new FormControl('', Validators.required)

  })

  constructor( private apiService: ApiService) {
    this.cargarEmprendimiento()
  }

  cargarEmprendimiento() {

    //{
    //     "success": true,
    //     "message": "",
    //     "data": {
    //         "id": 1,
    //         "nombre": "a",
    //         "ruc": "a",
    //         "descripcion": "a",
    //         "telefono": "a",
    //         "direccion": "a",
    //         "rubro": "Manualidades",
    //         "idAuth": {
    //             "id": 1,
    //             "username": "user12313",
    //             "password": "$2a$10$Mn3qgrKM9UobmnKM82Z8..bit0hfWOapRZU6EyKA9dBs3E9sJ9rs2",
    //             "name": "Johns",
    //             "lastName": "Does",
    //             "email": "user1223@example.com",
    //             "phone": "987654321",
    //             "carrera": "Ing. Sistemas",
    //             "role": "USER",
    //             "createAt": "2024-10-25T06:21:44.635+00:00",
    //             "moduleEntities": []
    //         }
    //     }
    // }
    this.apiService.cargarEmprendimiento().subscribe(value => {
      if(value.success){
        this.FormNegocio.setValue({
          nombreNegocio: value.data.data.nombre,
          ruc: value.data.data.ruc,
          descripcion: value.data.data.descripcion,
          telefono: value.data.data.telefono,
          direccion: value.data.data.direccion,
          rubro: value.data.data.rubro,
          imagenes: ""
        });
        this.base64Strings = value.data.imagenes;
      }




    })


  }

  guardarEmprendimiento(){


    let payload:any={
      nombre :this.FormNegocio.getRawValue().nombreNegocio,
      ruc:this.FormNegocio.getRawValue().ruc,
      descripcion:this.FormNegocio.getRawValue().descripcion,
      telefono:this.FormNegocio.getRawValue().telefono,
      direccion:this.FormNegocio.getRawValue().direccion,
      rubro:this.FormNegocio.getRawValue().rubro,
      imagenes:this.base64Strings
    }

    this.apiService.guardarEmprendimiento(payload).subscribe((data:any)=>{


      alert("Emprendimiento guardado correctamente");
    })

  }

  cargarImagenes(event: any) {

    this. base64Strings = [];

    const files: FileList = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.base64Strings.push(e.target.result);
      };

      reader.readAsDataURL(file);
    }

  }
  base64Strings: string[] = [];


}
