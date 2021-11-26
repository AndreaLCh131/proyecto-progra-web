import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {


  result: any;
  constructor() { }

  ngOnInit(): void {
    this.result = "./assets/images/banner-principal.jpg";
  }

}
