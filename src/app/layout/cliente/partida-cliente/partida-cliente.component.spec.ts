import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidaClienteComponent } from './partida-cliente.component';

describe('PartidaClienteComponent', () => {
  let component: PartidaClienteComponent;
  let fixture: ComponentFixture<PartidaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
