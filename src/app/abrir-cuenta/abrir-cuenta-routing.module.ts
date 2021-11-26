import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbrirCuentaComponent } from './abrir-cuenta.component';

const routes: Routes = [
  { path: '', component: AbrirCuentaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbrirCuentaRoutingModule { }
