import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAgregarScreenComponent } from './doctor-agregar-screen.component';

describe('DoctorAgregarScreenComponent', () => {
  let component: DoctorAgregarScreenComponent;
  let fixture: ComponentFixture<DoctorAgregarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAgregarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAgregarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
