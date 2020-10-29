import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionPersonalDoctorComponent } from './sesion-personal-doctor.component';

describe('SesionPersonalDoctorComponent', () => {
  let component: SesionPersonalDoctorComponent;
  let fixture: ComponentFixture<SesionPersonalDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionPersonalDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionPersonalDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
