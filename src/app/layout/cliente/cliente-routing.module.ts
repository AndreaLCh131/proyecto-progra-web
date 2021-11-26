import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'historial-apuestas', loadChildren: () => import('./historial-apuestas/historial-apuestas.module').then(m => m.HistorialApuestasModule) },
  { path: 'hoja-apuestas', loadChildren: () => import('./hoja-apuestas/hoja-apuestas.module').then(m => m.HojaApuestasModule) },
  { path: 'partida-cliente', loadChildren: () => import('./partida-cliente/partida-cliente.module').then(m => m.PartidaClienteModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
