import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  responsiveOptions: any;
  banners: any;
  constructor() { }

  ngOnInit(): void {

    this.responsiveOptions = [
      // {
      //     breakpoint: '1024px',
      //     numVisible: 3,
      //     numScroll: 3
      // },
      // {
      //     breakpoint: '768px',
      //     numVisible: 2,
      //     numScroll: 2
      // },
      // {
      //     breakpoint: '560px',
      //     numVisible: 1,
      //     numScroll: 1
      // }
  ];

    this.banners = [{"urlImage": "./assets/images/banner-principal.jpg"},
    {"urlImage": "./assets/images/mi4.jpg"},  {"urlImage": "./assets/images/mi6.png"},  {"urlImage": "./assets/images/mi7.jpg"},
    {"urlImage": "./assets/images/mi8.jpg"}
    ];
    // this.banners = [{"urlImage": "./assets/images/banner-principal.jpg"},
    // {"urlImage": "./assets/images/mi4.jpg"},  {"urlImage": "./assets/images/mi6.png"}
    // ];
  }

}
