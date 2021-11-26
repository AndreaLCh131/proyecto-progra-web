import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-header-full',
  templateUrl: './header-full.component.html',
  styleUrls: ['./header-full.component.scss']
})
export class HeaderFullComponent implements OnInit {

  page: string;
  constructor(private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.page = "";
    //this.page = this.route.snapshot.queryParams['page'] || '/login';
  }
  abrirCuenta(){
    this.page = '/abrir';
    this.router.navigate([this.page]);
  }

  iniciarSesion(){
    this.page = '/login';
    this.router.navigate([this.page]);
  }
}
