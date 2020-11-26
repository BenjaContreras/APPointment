import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorObtenerxrutScreenComponent } from './doctor-obtenerxrut-screen.component';

describe('DoctorObtenerxrutScreenComponent', () => {
  let component: DoctorObtenerxrutScreenComponent;
  let fixture: ComponentFixture<DoctorObtenerxrutScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorObtenerxrutScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorObtenerxrutScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
