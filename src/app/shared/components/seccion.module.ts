import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../modules/shared/shared.module';
import { HeaderFullComponent } from './header-full/header-full.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    SidebarModule,
    ButtonModule,RouterModule
  ],
  declarations: [FooterComponent, HeaderComponent, HeaderFullComponent, SidebarComponent],
  exports: [FooterComponent, HeaderComponent, HeaderFullComponent, SidebarComponent]
  
})
export class SeccionModule { }
