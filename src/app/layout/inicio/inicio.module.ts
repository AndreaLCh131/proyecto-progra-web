import { NgModule } from '@angular/core';
import { InicioRoutingModule } from './inicio-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { InicioComponent } from './inicio.component';


@NgModule({
  imports: [
    SharedModule,
    InicioRoutingModule
  ],
  declarations: [InicioComponent]
  
})
export class InicioModule { }
