import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarContactoEspecialComponent } from './modificar-contacto-especial.component';

describe('ModificarContactoEspecialComponent', () => {
  let component: ModificarContactoEspecialComponent;
  let fixture: ComponentFixture<ModificarContactoEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarContactoEspecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarContactoEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
