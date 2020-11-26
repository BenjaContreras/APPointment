import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteEliminarScreenComponent } from './paciente-eliminar-screen.component';

describe('PacienteEliminarScreenComponent', () => {
  let component: PacienteEliminarScreenComponent;
  let fixture: ComponentFixture<PacienteEliminarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteEliminarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteEliminarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
