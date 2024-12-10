import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass} from '@angular/common';
import {ApiService} from '../../services/api.service';
import {LoginAuthModel} from '../../models/authModel';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [

    ReactiveFormsModule,
    RouterLink,
    NgClass
  ],
  providers: [ApiService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',

})
export class LoginComponent {

  form= new FormGroup({
    email :new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  constructor(private apiService: ApiService, private router:Router) {
  }

  Login() {
     let payload:LoginAuthModel = {
       username: this.form.getRawValue().email,
       password: this.form.getRawValue().password
     }
     this.apiService.login(payload).subscribe((response)=>{
      localStorage.setItem('token',response.data.token);
      this.router.navigate(['/home']);
     })

  }
}
