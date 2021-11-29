import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteWrapperComponent } from './cliente-wrapper/cliente-wrapper.component';
import { PartidaClienteComponent } from './partida-cliente/partida-cliente.component';
import { HojaApuestasComponent } from './hoja-apuestas/hoja-apuestas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HojaApuestaComponent } from './hoja-apuesta/hoja-apuesta.component';


@NgModule({
  declarations: [
    PartidaClienteComponent,
    ClienteWrapperComponent,
    HojaApuestasComponent,
    HojaApuestaComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClienteModule { }
