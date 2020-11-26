import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteModificarScreenComponent } from './paciente-modificar-screen.component';

describe('PacienteModificarScreenComponent', () => {
  let component: PacienteModificarScreenComponent;
  let fixture: ComponentFixture<PacienteModificarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteModificarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteModificarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
