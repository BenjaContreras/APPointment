import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorEliminarScreenComponent } from './doctor-eliminar-screen.component';

describe('DoctorEliminarScreenComponent', () => {
  let component: DoctorEliminarScreenComponent;
  let fixture: ComponentFixture<DoctorEliminarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorEliminarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorEliminarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
