import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerXRutDoctorComponent } from './obtener-xrut-doctor.component';

describe('ObtenerXRutDoctorComponent', () => {
  let component: ObtenerXRutDoctorComponent;
  let fixture: ComponentFixture<ObtenerXRutDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtenerXRutDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerXRutDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
