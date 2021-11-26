import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'abrir', loadChildren: () => import('./abrir-cuenta/abrir-cuenta.module').then(m => m.AbrirCuentaModule) },
  { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)},
  { path: '', loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalModule)},
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
