import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HojaApuestaComponent } from '../hoja-apuesta/hoja-apuesta.component';

@Component({
  selector: 'app-hoja-apuestas',
  templateUrl: './hoja-apuestas.component.html',
  styleUrls: ['./hoja-apuestas.component.scss']
})
export class HojaApuestasComponent implements OnInit {
  @ViewChildren(HojaApuestaComponent) viewChildren: QueryList<HojaApuestaComponent>;

  @Input() apuestas: any;
  @Output() _oncClickCerrarApuesta = new EventEmitter<any>();
  @Output() _oncClickEliminarTodasApuestas = new EventEmitter<void>();

  valoresTotalesForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.valoresTotalesForm = this.buildForm();
  }

  handleOnClickCerrarApuesta(apuesta: any): void {
    this._oncClickCerrarApuesta.emit(apuesta);
    setTimeout(() => {
      this.valoresTotalesForm.get('montoTotal').patchValue(this.calcularMontoTotal());
      this.valoresTotalesForm.get('gananciaTotal').patchValue(this.calcularGananciaTotal());
    }, 0);
  }

  handleOnValueChangesApuesta(): void {
    this.valoresTotalesForm.get('montoTotal').patchValue(this.calcularMontoTotal());
    this.valoresTotalesForm.get('gananciaTotal').patchValue(this.calcularGananciaTotal());
  }

  onClickEliminarTodasApuestas(): void {
    this._oncClickEliminarTodasApuestas.emit();
    setTimeout(() => {
      this.valoresTotalesForm.get('montoTotal').patchValue(this.calcularMontoTotal());
      this.valoresTotalesForm.get('gananciaTotal').patchValue(this.calcularGananciaTotal());
    }, 0);
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      montoTotal: [{ value: '', disabled: true }],
      gananciaTotal: [{ value: '', disabled: true }]
    });
  }

  private calcularMontoTotal(): number {
    const montos = this.viewChildren.toArray().map(hojaApuestaComponent => hojaApuestaComponent.hojaApuestaForm.value.valorMonto);
    if (!montos || !montos.length) return 0;
    return montos.reduce((acc, cv) => acc + cv);
  }

  private calcularGananciaTotal(): number {
    const ganancias = this.viewChildren.toArray().map(hojaApuestaComponent => hojaApuestaComponent.hojaApuestaForm.get('valorGanancia').value);
    if (!ganancias || !ganancias.length) return 0;
    return ganancias.reduce((acc, cv) => acc + cv);
  }
}
