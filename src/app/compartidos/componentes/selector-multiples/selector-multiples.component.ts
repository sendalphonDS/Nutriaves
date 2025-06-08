import { Component, Input } from '@angular/core';
import { SelectorMultipleDTO } from './SelectorMultipleModelo';

@Component({
  selector: 'app-selector-multiples',
  imports: [],
  templateUrl: './selector-multiples.component.html',
  styleUrl: './selector-multiples.component.css'
})
export class SelectorMultiplesComponent {

  @Input({required: true})
  Seleccionados!: SelectorMultipleDTO[];
  
  @Input({required: true})
  NoSelecciondos!: SelectorMultipleDTO[];

  seleccionar(elemento: SelectorMultipleDTO, indice: number){
    this.Seleccionados.push(elemento);
    this.NoSelecciondos.splice(indice, 1);
  }

  deseleccionar(elemento: SelectorMultipleDTO, indice: number){
    this.NoSelecciondos.push(elemento);
    this.Seleccionados.splice(indice,1);
  }

  seleccionarTodo(){
    this.Seleccionados.push(...this.NoSelecciondos);
    this.NoSelecciondos.length = 0 ;
  }

  deseleccionarTodo(){
    this.NoSelecciondos.push(...this.Seleccionados);
    this.Seleccionados.length = 0;
  }


}
