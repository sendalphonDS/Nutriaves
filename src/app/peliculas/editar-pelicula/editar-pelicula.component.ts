import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiples/SelectorMultipleModelo';
import { actorAutoCompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {
  
  @Input({transform: numberAttribute})
  id!: number;

  pelicula: PeliculaDTO = {id: 1, titulo: 'violet evar' ,trailer:'ABC', fechaLanzamiento:new Date('2018-07-25'), poster:'https://m.media-amazon.com/images/S/pv-target-images/d8ba16cf958ce336344f38a65f38d863149106d8b2bd618c5066c75b8a1bfc6f.jpg'}

  generosSeleccionados: SelectorMultipleDTO[] = [
    {llave: 2, valor: 'Accion'},
  ];
    generosNoSeleccionados: SelectorMultipleDTO[] = [
      {llave: 1, valor: 'Drama'},
      {llave: 3, valor: 'Comedia'}
    ]

    cinesSeleccionados: SelectorMultipleDTO[] = [
      {llave: 2, valor: 'crossfit'}

    ];

    cinesNoSeleccionados: SelectorMultipleDTO[] = [
      {llave: 1, valor: 'casa Arthur'},
      {llave: 3, valor: 'upao'}
    ];
    
  actoresSeleccionados: actorAutoCompleteDTO[] = [
    { id: 2, nombre: 'rem', personaje:'Remu', foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy6Ym4ig2JMes_IeCNn5H7DzLGumM72QGCjg&s'},
  ]

  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log('editando pelicula', pelicula);
  }
}
