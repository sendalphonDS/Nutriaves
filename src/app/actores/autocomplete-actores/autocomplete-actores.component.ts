import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatTable, MatTableModule}  from '@angular/material/table';
import { actorAutoCompleteDTO } from '../actores';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-autocomplete-actores',
  standalone: true,
  imports: [MatAutocompleteModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, FormsModule, MatTableModule, MatInputModule,
    DragDropModule

  ],
  templateUrl: './autocomplete-actores.component.html',
  styleUrl: './autocomplete-actores.component.css'
})
export class AutocompleteActoresComponent {

  control = new FormControl();

  actores: actorAutoCompleteDTO[] = [
  {
    id: 1, nombre: 'ruka chan', personaje:'', foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrC1oxgTrxjAMggr1awHUJskH9icIeXVfMH6RNulyIRYnZdJy4TKHRsJDP9ERKp_Tvjc&usqp=CAU'
  }, 
  { id: 2, nombre: 'rem', personaje:'', foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy6Ym4ig2JMes_IeCNn5H7DzLGumM72QGCjg&s'},
  { id: 3, nombre: 'azuka', personaje:'', foto:'https://sm.ign.com/t/ign_latam/screenshot/default/template-7_w8p7.1200.jpg'},
]
  @Input({required: true})
  actoresSeleccionados: actorAutoCompleteDTO[] = [];

  columnasAMostrar = ['imagen' , 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) table!: MatTable<actorAutoCompleteDTO>

  actorSeleccionado(event: MatAutocompleteSelectedEvent){
  this.actoresSeleccionados.push(event.option.value);
  this.control.patchValue('');
    if(this.table != undefined){
      this.table.renderRows();
    }

}

  finalizarArrastre(event: CdkDragDrop<any []>){
    const indicePrevio = this.actoresSeleccionados.findIndex(actor => actor === event.item.data);
    moveItemInArray(this.actoresSeleccionados, indicePrevio,event.currentIndex);
    this.table.renderRows();
  }

eliminar(actor: actorAutoCompleteDTO){
  const indice = this.actoresSeleccionados.findIndex((a: actorAutoCompleteDTO)=> a.id === actor.id);
  this.actoresSeleccionados.splice(indice, 1);
  this.table.renderRows();
}

}
