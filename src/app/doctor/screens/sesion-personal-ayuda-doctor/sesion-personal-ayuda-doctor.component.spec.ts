import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionPersonalAyudaDoctorComponent } from './sesion-personal-ayuda-doctor.component';

describe('SesionPersonalAyudaDoctorComponent', () => {
  let component: SesionPersonalAyudaDoctorComponent;
  let fixture: ComponentFixture<SesionPersonalAyudaDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionPersonalAyudaDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionPersonalAyudaDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
