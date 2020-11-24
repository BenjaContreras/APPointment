import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerDoctorComponent } from './obtener-doctor.component';

describe('ObtenerDoctorComponent', () => {
  let component: ObtenerDoctorComponent;
  let fixture: ComponentFixture<ObtenerDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtenerDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
