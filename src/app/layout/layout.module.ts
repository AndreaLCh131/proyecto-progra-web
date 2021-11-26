import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SeccionModule } from '../shared/components/seccion.module';
import { SharedModule } from '../shared/modules/shared/shared.module';




@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SeccionModule,
    LayoutRoutingModule,
  ],
  declarations: [
    LayoutComponent
  ],
  
})
export class LayoutModule { }
