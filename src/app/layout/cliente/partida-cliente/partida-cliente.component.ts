import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-partida-cliente',
  templateUrl: './partida-cliente.component.html',
  styleUrls: ['./partida-cliente.component.scss']
})
export class PartidaClienteComponent implements OnInit {

  @Input() partidaCliente: any;
  @Output() _onClickPartida = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickPartida(partida: any): void {
    this._onClickPartida.emit(
      {
        hora: this.partidaCliente.hora,
        equipos: this.partidaCliente.equipos,
        partida
      }
    );
  }
}
