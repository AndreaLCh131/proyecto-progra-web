import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbrirCuentaRoutingModule } from './abrir-cuenta-routing.module';
import { AbrirCuentaComponent } from './abrir-cuenta.component';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { SeccionModule } from '../shared/components/seccion.module';


@NgModule({
  imports: [
    CommonModule,
    AbrirCuentaRoutingModule, SharedModule, SeccionModule
  ],
  declarations: [AbrirCuentaComponent]
})
export class AbrirCuentaModule { }
