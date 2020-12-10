import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarContactoEspecialComponent } from './agregar-contacto-especial.component';

describe('AgregarContactoEspecialComponent', () => {
  let component: AgregarContactoEspecialComponent;
  let fixture: ComponentFixture<AgregarContactoEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarContactoEspecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarContactoEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
