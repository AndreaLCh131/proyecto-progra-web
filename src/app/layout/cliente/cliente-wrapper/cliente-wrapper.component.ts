import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-cliente-wrapper',
  templateUrl: './cliente-wrapper.component.html',
  styleUrls: ['./cliente-wrapper.component.scss']
})
export class ClienteWrapperComponent implements OnInit {

  public partidasClientes: any = [];
  public apuestas: any = [];

  constructor() { }

  ngOnInit(): void {
    this.partidasClientes = [
      {
        hora: "09:30",
        equipos: "Peru - Brasil",
        partidas: [
          {
            id: uuidv4(),
            resultado: "2-1",
            ganador: "Peru",
            factor: 2.5
          },
          {
            id: uuidv4(),
            resultado: "1-0",
            ganador: "Peru",
            factor: 3
          },
          {
            id: uuidv4(),
            resultado: "2-0",
            ganador: "Brasil",
            factor: 8.24
          },
          {
            id: uuidv4(),
            resultado: "3-1",
            ganador: "Brasil",
            factor: 7.1
          }
        ]
      }
    ];

    // this.apuestas = [
    //   {
    //     hora: "09:30",
    //     equipos: "Peru - Brasil",
    //     partida: {
    //       resultado: "1-1",
    //       ganador: "Peru ",
    //       factor: 123
    //     }
    //   },
    //   {
    //     hora: "09:30",
    //     equipos: "Peru - Brasil",
    //     partida: {
    //       resultado: "1-1",
    //       ganador: "Peru ",
    //       factor: 123
    //     }
    //   },
    //   {
    //     hora: "09:30",
    //     equipos: "Peru - Brasil",
    //     partida: {
    //       resultado: "1-1",
    //       ganador: "Peru ",
    //       factor: 123
    //     }
    //   }
    // ];
  }

  handleOnClickPartida(apuesta: any): void {
    if (this.apuestas.find(_apuesta => apuesta.partida.id === _apuesta.partida.id)) return;
    this.apuestas = [...this.apuestas, apuesta];
  }

  handleOnClickCerrarApuesta(apuesta: any): void {
    this.apuestas = this.apuestas.filter(_apuesta => apuesta.partida.id !== _apuesta.partida.id);
  }

  handleOnClickEliminarTodasApuestas(): void {
    this.apuestas = [];
  }
}


