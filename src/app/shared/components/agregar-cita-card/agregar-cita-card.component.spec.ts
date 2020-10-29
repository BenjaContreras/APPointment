import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCitaCardComponent } from './agregar-cita-card.component';

describe('AgregarCitaCardComponent', () => {
  let component: AgregarCitaCardComponent;
  let fixture: ComponentFixture<AgregarCitaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCitaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCitaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
