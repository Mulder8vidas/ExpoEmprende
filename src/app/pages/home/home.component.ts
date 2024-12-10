import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {Button, ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {TagModule} from 'primeng/tag';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule,
    Button, RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  products: any[] = [];
  responsiveOptions: any[] | undefined;

  ngOnInit(): void {
    this.products = [
      {
        img: '/autonomaportada2.jpg',
        alt: 'ExpoEmprendimiento',
        text: "ExpoEmprende Autonoma 2024",
        subtext: "Somos una plataforma de emprendimiento que busca impulsar a los emprendedores de la Universidad Autónoma del Perú",
        btn: "Ver más"
      },
      {
        img: '/autonomaportada1.jpg',
        alt: 'ExpoEmprendimiento',
        text: "Busca y conecta con emprendedores",
        subtext: "En nuestra plataforma de emprendimiento estudiantil, brindamos a los jóvenes las herramientas y el apoyo necesarios para que puedan convertir sus proyectos en realidad",
        btn: "Ver más"
      }
    ];


    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }


}
