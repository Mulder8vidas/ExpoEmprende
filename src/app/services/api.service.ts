import { Injectable } from '@angular/core';
import {LoginAuthModel, TokenModel} from '../models/authModel';
import {Observable} from 'rxjs';
import {ResponseModel} from '../models/reponseModel';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlBase = 'https://2c31-38-25-25-239.ngrok-free.app';

  constructor(private http:HttpClient) { }

  login(payload:LoginAuthModel):Observable<ResponseModel<TokenModel>>{
    const url = `${this.urlBase}/auth/login`;

    return this.http.post<ResponseModel<TokenModel>>(url,payload,{
      headers:{
        "ngrok-skip-browser-warning":"true"
      }

    });
  }

  cargarEmprendimiento():Observable<any> {

    return this.http.get<any>("https://2c31-38-25-25-239.ngrok-free.app/emprendimiento",{
      headers:{
        "ngrok-skip-browser-warning":"true"
      }

    });
  }



  guardarEmprendimiento(rawValue: any) {
    return this.http.post("https://2c31-38-25-25-239.ngrok-free.app/emprendimiento", rawValue,{
      headers:{
        "ngrok-skip-browser-warning":"true"
      }

    });
  }
  cargarMisDatos():Observable<ResponseModel<any>> {

    return this.http.get<any>("https://2c31-38-25-25-239.ngrok-free.app/perfil",{
      headers:{
        "ngrok-skip-browser-warning":"true"
      }

    });

  }

  cargarEmprendimientos():Observable<ResponseModel<any>>{
    return this.http.get<any>("https://2c31-38-25-25-239.ngrok-free.app/public/emprendimiento/all",{
      headers:{
        "ngrok-skip-browser-warning":"true"
      }

    });
  }
  cargarFiltro(nombre:string){
    return this.http.post<any>("https://2c31-38-25-25-239.ngrok-free.app/public/emprendimiento/buscar",{
      busqueda:nombre
    },{
      headers:{
        "ngrok-skip-browser-warning":"true"
      }

    })

  }
  cargarEmprendimientoDetalle(id:any){
    return this.http.get<any>("https://2c31-38-25-25-239.ngrok-free.app/public/emprendimiento/"+id,{
      headers:{
        "ngrok-skip-browser-warning":"true"
      }

    });

  }
  registrar(data: any): Observable<any> {
    return this.http.post(this.urlBase + '/auth/registro', data,{
      headers:{
        "ngrok-skip-browser-warning":"true"
      }

    });

  }


}
