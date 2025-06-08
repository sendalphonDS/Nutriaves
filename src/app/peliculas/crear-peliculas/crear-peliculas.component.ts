import { Component } from '@angular/core';
import { PeliculaCreacionDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiples/SelectorMultipleModelo';
import { actorAutoCompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-crear-peliculas',
  imports: [FormularioPeliculasComponent],
  templateUrl: './crear-peliculas.component.html',
  styleUrl: './crear-peliculas.component.css'
})
export class CrearPeliculasComponent {

  generosSeleccionados: SelectorMultipleDTO[] = [];
  
  generosNoSeleccionados: SelectorMultipleDTO[] = [
    {llave: 1, valor: 'Drama'},
    {llave: 2, valor: 'Accion'},
    {llave: 3, valor: 'Comedia'}
  ]

  cinesSeleccionados: SelectorMultipleDTO[] = [];

  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    {llave: 1, valor: 'casa Arthur'},
    {llave: 2, valor: 'crossfit'},
    {llave: 3, valor: 'upao'}
  ]

  actoresSeleccionados: actorAutoCompleteDTO[] = [];


  guardarCambios (pelicula:PeliculaCreacionDTO){
    console.log('creando peliculas', pelicula);
  }

}
