import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaObtenerScreenComponent } from './cita-obtener-screen.component';

describe('CitaObtenerScreenComponent', () => {
  let component: CitaObtenerScreenComponent;
  let fixture: ComponentFixture<CitaObtenerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaObtenerScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaObtenerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
