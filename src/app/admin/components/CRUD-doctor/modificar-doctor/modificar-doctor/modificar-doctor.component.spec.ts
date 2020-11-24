import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDoctorComponent } from './modificar-doctor.component';

describe('ModificarDoctorComponent', () => {
  let component: ModificarDoctorComponent;
  let fixture: ComponentFixture<ModificarDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
