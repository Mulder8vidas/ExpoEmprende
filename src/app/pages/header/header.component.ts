import {AfterViewInit, Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {UsersService} from '../../services/users.service';
import {CurrentUserModel} from '../../models/authModel';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    RouterLinkActive,
    RouterLink
  ],
  providers:[UsersService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit{
  constructor(private router:Router, public userService:UsersService) {


  }




  estado=1;

  toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu?.classList.toggle('hidden');
  }
  changeState(estado: number){
    this.estado=estado;

  }
  closeMenuOnSelect() {
    const menu = document.getElementById('mobile-menu');
    if (menu && !menu.classList.contains('hidden')) {
      this.toggleMenu();
    }
  }

  isCurrentUserActive(){
    return this.userService.isLogged();
  }

  ngAfterViewInit(): void {

  }

  salir() {

    localStorage.clear();
    this.router.navigate([''])
  }
}
