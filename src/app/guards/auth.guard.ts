import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);


  const currentUser: any=localStorage.getItem('token');


  if(currentUser==undefined){
    router.navigate(['']);
    return false;
  }

  return true;
};
