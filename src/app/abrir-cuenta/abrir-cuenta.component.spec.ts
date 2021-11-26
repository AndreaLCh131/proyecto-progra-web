import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirCuentaComponent } from './abrir-cuenta.component';

describe('AbrirCuentaComponent', () => {
  let component: AbrirCuentaComponent;
  let fixture: ComponentFixture<AbrirCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbrirCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrirCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
