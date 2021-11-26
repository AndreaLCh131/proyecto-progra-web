import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  visibleSidebar2:boolean;
  modulos:any[];
  constructor() {
    this.modulos = [];
    this.visibleSidebar2 = false;
   }

  ngOnInit(): void {
    this.modulos = [{"ruta":"/layout/admin/banner", "icono":"--", "etiqueta": "Banners"},
    {"ruta":"/layout/admin/categoria", "icono":"--", "etiqueta": "Categorias"}, {"ruta":"/layout/admin/juego", "icono":"--", "etiqueta": "Juegos"}];
  }

}
