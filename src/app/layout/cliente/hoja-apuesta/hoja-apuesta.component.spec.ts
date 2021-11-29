import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaApuestaComponent } from './hoja-apuesta.component';

describe('HojaApuestaComponent', () => {
  let component: HojaApuestaComponent;
  let fixture: ComponentFixture<HojaApuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HojaApuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HojaApuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
