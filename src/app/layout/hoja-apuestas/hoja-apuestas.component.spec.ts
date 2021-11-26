import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaApuestasComponent } from './hoja-apuestas.component';

describe('HojaApuestasComponent', () => {
  let component: HojaApuestasComponent;
  let fixture: ComponentFixture<HojaApuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HojaApuestasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HojaApuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
