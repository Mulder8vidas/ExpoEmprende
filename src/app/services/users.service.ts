import { Injectable } from '@angular/core';
import {jwtDecode} from "jwt-decode";
import {CurrentUserModel} from '../models/authModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {



  constructor() { }
  getDatosUsuario():CurrentUserModel{

    let token = localStorage.getItem('token');
    if(token==null){
      return {
        exp: 0,
        iat: 0,
        iss: '',
        modules: '',
        role: '',
        sub: '',
        USER: '',
        email: 'aa'
      };
    }



    return jwtDecode(token) as any;

  }

  isLogged() {
    return localStorage.getItem('token') != null;
  }


  get currentUser(): any {
    return this.getDatosUsuario();
  }
}

