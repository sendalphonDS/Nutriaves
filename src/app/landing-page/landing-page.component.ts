import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from "../peliculas/listado-peliculas/listado-peliculas.component";

@Component({
  selector: 'app-landing-page',
  imports: [ListadoPeliculasComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [
        {
        titulo : 'alimento para pollos',
        fechalanzamiento: new Date(),
        precio : 1400.99,
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTknp1aLkOdHIYJsUrweEJSb9X15y23KzOVIg&s'
       },
       {
       titulo : 'alimento para gallinas',
       fechalanzamiento: new Date(),
       precio : 1400.99,
       poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9qQFrUrfEWA55PpqBqgO0r6KG0bE_2Utylw&s'
      },
      {
        titulo : 'alimento para patos',
        fechalanzamiento: new Date(),
        precio : 1400.99,
        poster: 'https://m.media-amazon.com/images/I/81S6aA1+-kL._AC_SL1500_.jpg'
       },
       {
        titulo : 'alimento para pavos',
        fechalanzamiento: new Date(),
        precio : 1400.99,
        poster: 'https://m.media-amazon.com/images/I/81RI4q4sGEL._AC_SY200_QL15_.jpg'
       },
       {
        titulo : 'alimento para cordonis',
        fechalanzamiento: new Date(),
        precio : 1400.99,
        poster: 'https://http2.mlstatic.com/D_753567-MLM75824949487_042024-C.jpg'
       },
      
      
      ];

      this.peliculasProximosExtrenos = [{
        
          titulo : 'alimento para cerdo',
          fechalanzamiento: new Date(),
          precio : 1400.99,
          poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcRqBo5J0rlxokj9LO7WSz_vy3Dh2PPW1q-g&s'
         }
        ];
    }, 100);
  }

    peliculasEnCines!: any[];
    peliculasProximosExtrenos!: any[];
}
