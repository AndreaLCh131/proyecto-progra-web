import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  page: string;
  constructor(private route: ActivatedRoute,   private router: Router) { 
    this.page = "";
  }

  ngOnInit(): void {
    console.log(this.route.snapshot);
    this.page = this.route.snapshot.queryParams['page'] || 'layout/bienvenida';
  }

  loggearCliente(){

    this.router.navigate([this.page]);

  }

}
