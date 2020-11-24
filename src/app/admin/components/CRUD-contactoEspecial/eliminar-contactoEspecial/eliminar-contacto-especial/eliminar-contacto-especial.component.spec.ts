import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarContactoEspecialComponent } from './eliminar-contacto-especial.component';

describe('EliminarContactoEspecialComponent', () => {
  let component: EliminarContactoEspecialComponent;
  let fixture: ComponentFixture<EliminarContactoEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarContactoEspecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarContactoEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
