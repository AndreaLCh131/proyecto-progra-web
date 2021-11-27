import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteWrapperComponent } from './cliente-wrapper/cliente-wrapper.component';

const routes: Routes = [
  {
    path: '', component: ClienteWrapperComponent,
    children: [
      { path: 'historial-apuestas', loadChildren: () => import('./historial-apuestas/historial-apuestas.module').then(m => m.HistorialApuestasModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
