import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    CarouselModule
  ]
})
export class SharedModule { }
