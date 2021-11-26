import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { SeccionModule } from '../shared/components/seccion.module';
import { LoginComponent } from './login.component';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule, SharedModule, SeccionModule
  ],
  declarations: [LoginComponent],

})
export class LoginModule { }
