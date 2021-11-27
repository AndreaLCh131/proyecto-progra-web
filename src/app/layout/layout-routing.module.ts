import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'cliente', loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule) },
      { path: 'bienvenida', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) },
      { path: 'banner', loadChildren: () => import('./admin/banner/banner.module').then(m => m.BannerModule) },
      { path: 'categoria', loadChildren: () => import('./admin/categoria/categoria.module').then(m => m.CategoriaModule) },
      { path: 'juego', loadChildren: () => import('./admin/juego/juego.module').then(m => m.JuegoModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }