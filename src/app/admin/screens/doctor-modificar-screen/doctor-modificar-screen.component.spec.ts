import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorModificarScreenComponent } from './doctor-modificar-screen.component';

describe('DoctorModificarScreenComponent', () => {
  let component: DoctorModificarScreenComponent;
  let fixture: ComponentFixture<DoctorModificarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorModificarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorModificarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
