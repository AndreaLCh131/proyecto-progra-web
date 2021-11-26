import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner.component';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';

const routes: Routes = [{
  path:'',
  component: BannerComponent,
  children: [  
    { path:'', component: ListadoComponent, pathMatch:'full'  },
    { path:'nuevo', component: NuevoComponent },
    { path:':id', component: NuevoComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannerRoutingModule { }
