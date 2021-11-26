import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: '<router-outlet> </router-outlet>',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
