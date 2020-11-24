import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesScreenComponent } from './pacientes-screen.component';

describe('PacientesScreenComponent', () => {
  let component: PacientesScreenComponent;
  let fixture: ComponentFixture<PacientesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
