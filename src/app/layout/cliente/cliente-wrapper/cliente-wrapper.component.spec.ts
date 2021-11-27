import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteWrapperComponent } from './cliente-wrapper.component';

describe('ClienteWrapperComponent', () => {
  let component: ClienteWrapperComponent;
  let fixture: ComponentFixture<ClienteWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
