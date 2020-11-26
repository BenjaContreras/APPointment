import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaModificarScreenComponent } from './cita-modificar-screen.component';

describe('CitaModificarScreenComponent', () => {
  let component: CitaModificarScreenComponent;
  let fixture: ComponentFixture<CitaModificarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaModificarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaModificarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
