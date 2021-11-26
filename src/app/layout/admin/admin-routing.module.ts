import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'banner', loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule) },
  { path: 'categoria', loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule) },
  { path: 'juego', loadChildren: () => import('./juego/juego.module').then(m => m.JuegoModule) },
  { path: 'partida-admin', loadChildren: () => import('./partida-admin/partida-admin.module').then(m => m.PartidaAdminModule) },
  { path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
