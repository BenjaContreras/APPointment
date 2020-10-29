import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionPersonalCitasDoctorComponent } from './sesion-personal-citas-doctor.component';

describe('SesionPersonalCitasDoctorComponent', () => {
  let component: SesionPersonalCitasDoctorComponent;
  let fixture: ComponentFixture<SesionPersonalCitasDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionPersonalCitasDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionPersonalCitasDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
