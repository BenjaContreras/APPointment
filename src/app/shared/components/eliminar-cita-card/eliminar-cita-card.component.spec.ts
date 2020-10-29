import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCitaCardComponent } from './eliminar-cita-card.component';

describe('EliminarCitaCardComponent', () => {
  let component: EliminarCitaCardComponent;
  let fixture: ComponentFixture<EliminarCitaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarCitaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarCitaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
