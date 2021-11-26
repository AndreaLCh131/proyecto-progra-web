import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  colsListadoBanner: any[];
  listado: any [];
  constructor( private router: Router,  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.inicializarDatos();
  }
  inicializarDatos(){
    this.colsListadoBanner = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'imagen', header: 'Imagen' },
      { field: 'url', header: 'Url'},
      { field: 'estado', header: 'Estado'},
      { field: 'acciones', header: 'Acción'},
    ];
    this.listado = [{"bannerId": 123, "nombre":"Fultbol Campeonato", "imagen": "", "url": "icioco/apuestas", "estado": "activo"},
    {"bannerId": 456, "nombre":"Fultbol Campeonato", "imagen": "", "url": "icioco/apuestas", "estado": "activo"},
    {"bannerId": 678, "nombre":"Fultbol Campeonato", "imagen": "", "url": "icioco/apuestas", "estado": "activo"},
    {"bannerId": 890, "nombre":"Fultbol Campeonato", "imagen": "", "url": "icioco/apuestas", "estado": "activo"}];
  }

  onClickNuevo() {
    this.router.navigate(["nuevo"], { relativeTo: this.activatedRoute });
  }

  onClickModificar(bannerId: number) {
    this.router.navigate([bannerId], { relativeTo: this.activatedRoute });
  }

}
