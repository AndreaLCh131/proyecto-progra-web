import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { SeccionModule } from 'src/app/shared/components/seccion.module';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { FiltroComponent } from './filtro/filtro.component';
import { BannerComponent } from './banner.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [BannerComponent,ListadoComponent, NuevoComponent, FiltroComponent],
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    BannerRoutingModule
  ]
})
export class BannerModule { }
