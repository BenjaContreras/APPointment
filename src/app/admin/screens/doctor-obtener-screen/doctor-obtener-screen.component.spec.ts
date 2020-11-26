import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorObtenerScreenComponent } from './doctor-obtener-screen.component';

describe('DoctorObtenerScreenComponent', () => {
  let component: DoctorObtenerScreenComponent;
  let fixture: ComponentFixture<DoctorObtenerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorObtenerScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorObtenerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
