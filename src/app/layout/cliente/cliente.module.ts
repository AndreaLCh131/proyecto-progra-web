import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteWrapperComponent } from './cliente-wrapper/cliente-wrapper.component';
import { PartidaClienteComponent } from './partida-cliente/partida-cliente.component';


@NgModule({
  declarations: [
    PartidaClienteComponent,
    ClienteWrapperComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
