import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ListadoPeliculasComponent } from "../listado-peliculas/listado-peliculas.component";
import { FiltroPeliculas } from './filtroPeliculas';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, ListadoPeliculasComponent],
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent implements OnInit {
  ngOnInit(): void {
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value as FiltroPeliculas);
    this.form.valueChanges.subscribe(valores =>{
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores as FiltroPeliculas)
      this.escribirParametrosBusquedaEnURL(valores as FiltroPeliculas);
     
    });
  }

  buscarPeliculas(valores: FiltroPeliculas){
    if(valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }
    if (valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);
    }
    if(valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }
    if(valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }
   
  escribirParametrosBusquedaEnURL(valores: FiltroPeliculas){
    let queryStrings = [];
    if (valores.titulo){
      queryStrings.push(`titulo=${encodeURIComponent(valores.titulo)}`);
    }
     if(valores.generoId !== 0){
       queryStrings.push(`generoId=${valores.generoId}`);
     }
     if(valores.proximosEstrenos){
      queryStrings.push(`proximosEstrenos=${valores.proximosEstrenos}`);
    }

    if(valores.enCines){
      queryStrings.push(`enCines=${valores.enCines}`);
    }

    this.location.replaceState('peliculas/filtrar', queryStrings.join('&'));
  }

  leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((params: any) => {
      var objeto: any = {};
      if (params.titulo){
        objeto.titulo = params.titulo;
      }
      if(params.generoId){
        objeto.generoId = Number(params.generoId);
      }
      if(params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos;
      }
      if (params.enCines){
        objeto.enCines = params.enCines;
      }
      this.form.patchValue(objeto);

    });
  }




  limpiar(){
    this.form.patchValue({titulo: '',generoId: 0, proximosEstrenos: false, enCines: false});
  }

  private formBuilder = inject(FormBuilder);
  private location = inject(Location);
  private activatedRoute = inject(ActivatedRoute);

  form = this.formBuilder.group ({
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  })

  generos = [
    {id: 1, nombre: "pollo"},
    {id: 2, nombre: "pato"},
    {id: 3, nombre: "pavo"}
  ]

  peliculasOriginal = [
    {
    titulo : 'alimento para pollos',
    fechalanzamiento: new Date(),
    precio : 1400.99,
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTknp1aLkOdHIYJsUrweEJSb9X15y23KzOVIg&s',
    generos: [1],
    enCines:true,
    proximosEstrenos:false
    },
   {
   titulo : 'alimento para gallinas',
   fechalanzamiento: new Date(),
   precio : 1400.99,
   poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9qQFrUrfEWA55PpqBqgO0r6KG0bE_2Utylw&s',
   generos: [1],
   enCines:false,
  proximosEstrenos:true
  },
  {
    titulo : 'alimento para patos',
    fechalanzamiento: new Date(),
    precio : 1400.99,
    poster: 'https://m.media-amazon.com/images/I/81S6aA1+-kL._AC_SL1500_.jpg',
    generos: [2],
    enCines:false,
    proximosEstrenos:false

   },
   {
    titulo : 'alimento para pavos',
    fechalanzamiento: new Date(),
    precio : 1400.99,
    poster: 'https://m.media-amazon.com/images/I/81RI4q4sGEL._AC_SY200_QL15_.jpg',
    generos: [3],
    enCines:true,
    proximosEstrenos:false
   },
   {
    titulo : 'alimento para cordonis',
    fechalanzamiento: new Date(),
    precio : 1400.99,
    poster: 'https://http2.mlstatic.com/D_753567-MLM75824949487_042024-C.jpg',
    generos: [1],
    enCines:true,
    proximosEstrenos:false
   },
  


  {
    
      titulo : 'alimento para cerdo',
      fechalanzamiento: new Date(),
      precio : 1400.99,
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcRqBo5J0rlxokj9LO7WSz_vy3Dh2PPW1q-g&s',
      generos: [],
      enCines:false,
      proximosEstrenos:true

     }
    ];

     peliculas = this.peliculasOriginal;
}
