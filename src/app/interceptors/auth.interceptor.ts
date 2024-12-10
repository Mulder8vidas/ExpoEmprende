import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private readonly router: Router,

  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
   try {

     const newBody = request.clone({
       setHeaders: {
         Authorization: `Bearer ${localStorage.getItem('token')}`,
       },
     });





     return next.handle(newBody).pipe(
       catchError((error: any) => {
         console.log(error)
         if (error.status == 401) {
           //localStorage.clear();
           //sessionStorage.clear();
           //this.router.navigate([''])
           return next.handle(request);
         }
         if(error.status==0){
              //localStorage.clear();
                //sessionStorage.clear();
              //this.router.navigate([''])
              return next.handle(request);
         }

         return throwError(() => error);
       })
     );
   }catch (e){

     localStorage.clear();
     sessionStorage.clear();
     this.router.navigate([''])
     return next.handle(request);
   }
  }
}
