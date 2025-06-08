import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { FormularioActoresComponen } from "../formulario-actores/formulario-actores.component";

@Component({
  selector: 'app-editar-actor',
  imports: [FormularioActoresComponen],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {

  @Input({transform: numberAttribute})
  id!: number;
  actor: ActorDTO = {id: 1, nombre: 'ton holand' ,fechaNacimiento: new Date(1991, 0 ,25), foto:'https://images3.alphacoders.com/118/118949.jpg'}

  guardarCambios(actor: ActorCreacionDTO){
    console.log ('editando el actor', actor);
  }
}
