import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hoja-apuesta',
  templateUrl: './hoja-apuesta.component.html',
  styleUrls: ['./hoja-apuesta.component.scss']
})
export class HojaApuestaComponent implements OnInit {

  @Input() apuesta: any;
  @Output() _oncClickCerrarApuesta = new EventEmitter<any>();
  @Output() _onValueChangesApuesta = new EventEmitter<void>();

  hojaApuestaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.hojaApuestaForm = this.buildForm();
    this.hojaApuestaForm.get('valorMonto').valueChanges.subscribe(value => {
      this.hojaApuestaForm.get('valorGanancia').patchValue(value * this.apuesta.partida.factor);
      this._onValueChangesApuesta.emit();
    })
  }

  onClickCerrarApuesta(apuesta: any): void {
    this._oncClickCerrarApuesta.emit(apuesta);
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      valorMonto: [''],
      valorGanancia: [{ value: '', disabled: true }]
    });
  }
}
