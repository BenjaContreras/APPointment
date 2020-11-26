import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaEliminarScreenComponent } from './cita-eliminar-screen.component';

describe('CitaEliminarScreenComponent', () => {
  let component: CitaEliminarScreenComponent;
  let fixture: ComponentFixture<CitaEliminarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaEliminarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaEliminarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
