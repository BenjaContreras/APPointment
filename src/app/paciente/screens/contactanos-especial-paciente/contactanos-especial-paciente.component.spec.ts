import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactanosEspecialPacienteComponent } from './contactanos-especial-paciente.component';

describe('ContactanosEspecialPacienteComponent', () => {
  let component: ContactanosEspecialPacienteComponent;
  let fixture: ComponentFixture<ContactanosEspecialPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactanosEspecialPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactanosEspecialPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
