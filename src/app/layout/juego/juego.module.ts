import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegoRoutingModule } from './juego-routing.module';
import { JuegoComponent } from './juego.component';


@NgModule({
  imports: [
    CommonModule,
    JuegoRoutingModule
  ],
  declarations: [JuegoComponent]
})
export class JuegoModule { }
