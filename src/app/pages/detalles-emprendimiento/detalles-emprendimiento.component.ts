import {Component, OnInit} from '@angular/core';
import {GalleriaModule} from 'primeng/galleria';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-detalles-emprendimiento',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './detalles-emprendimiento.component.html',
  styleUrl: './detalles-emprendimiento.component.css'
})
export class DetallesEmprendimientoComponent implements OnInit{
  detalleEmprendimiento :any[]=[]
  valor = 0;
  constructor(private router:ActivatedRoute, private apiService: ApiService) {
  }
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  ngOnInit(): void {
    this.router.params.subscribe(value => {
      console.log(value['id']);
      this.valor = value['id'];
      this.apiService.cargarEmprendimientoDetalle(this.valor).subscribe(value1 => {
        console.log(value1);
        this.detalleEmprendimiento=value1

      })
    });
  }

  contactar() {
    // Aseguramos que el arreglo detalleEmprendimiento no esté vacío antes de acceder al primer elemento
    if (this.detalleEmprendimiento.length > 0) {
      const emprendimiento = this.detalleEmprendimiento[0]; // Accedemos al primer objeto en el arreglo
      const nombreEmprendimiento = emprendimiento.nombre;
      const telefonoEmprendimiento = emprendimiento.telefono;

      const mensaje = `Buenos días, me interesa saber más sobre ${nombreEmprendimiento}.`;
      const mensajeCodificado = encodeURIComponent(mensaje);
      const urlWhatsApp = `https://wa.me/${telefonoEmprendimiento}?text=${mensajeCodificado}`;

      window.open(urlWhatsApp, '_blank');
    } else {
      console.log("No hay detalles de emprendimiento disponibles.");
    }
  }

}
