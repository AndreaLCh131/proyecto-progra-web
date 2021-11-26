import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidaAdminComponent } from './partida-admin.component';

describe('PartidaAdminComponent', () => {
  let component: PartidaAdminComponent;
  let fixture: ComponentFixture<PartidaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
