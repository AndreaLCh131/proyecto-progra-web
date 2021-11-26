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
    this.modulos = [{"ruta":"/layout/banner", "icono":"--", "etiqueta": "Banners"},
    {"ruta":"/layout/categoria", "icono":"--", "etiqueta": "Categorias"}, {"ruta":"/layout/juego", "icono":"--", "etiqueta": "Juegos"}];
  }

}
