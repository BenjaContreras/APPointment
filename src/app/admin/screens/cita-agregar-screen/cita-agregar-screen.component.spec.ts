import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaAgregarScreenComponent } from './cita-agregar-screen.component';

describe('CitaAgregarScreenComponent', () => {
  let component: CitaAgregarScreenComponent;
  let fixture: ComponentFixture<CitaAgregarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaAgregarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaAgregarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
