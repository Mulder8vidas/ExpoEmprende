import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {ApiService} from '../../services/api.service';



@Component({
  selector: 'app-emprendimientos',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgForOf
  ],
  templateUrl: './emprendimientos.component.html',
  styleUrl: './emprendimientos.component.css'
})
export class EmprendimientosComponent implements OnInit{
  data:any[]=[]
  emprendimientos:any[]=[]
  isDropdownOpen = false;
  currentFilter:string= "todos";

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  constructor(private router:Router, private apiservice:ApiService) {
  }


  ngOnInit(): void {
    this.llenardata();
  }
  llenardata(){
    this.apiservice.cargarFiltro("todos").subscribe(data=>{
      this.data=data;
      console.log(this.data);

    });
  }

  filtrar(filtro: string) {
    let filtrodatos=filtro.toLowerCase();
    this.currentFilter=filtrodatos;
    this.apiservice.cargarFiltro(filtrodatos).subscribe(value => {
      this.data=value;
     },);

  }

  verEmprendimiento(id:any) {
    this.router.navigate(['/detallesEmprendimientos',id]);

  }
}
