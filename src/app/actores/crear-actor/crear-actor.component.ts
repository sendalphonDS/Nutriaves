import { Component } from '@angular/core';
import { FormularioActoresComponen } from "../formulario-actores/formulario-actores.component";
import { ActorCreacionDTO } from '../actores';

@Component({
  selector: 'app-crear-actor',
  imports: [FormularioActoresComponen],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css'
})
export class CrearActorComponent {
  guardarCambios(actor: ActorCreacionDTO){
    console.log('creando el actor' , actor);
  }
  
}
