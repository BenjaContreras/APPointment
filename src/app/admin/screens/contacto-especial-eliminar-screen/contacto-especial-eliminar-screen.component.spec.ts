import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoEspecialEliminarScreenComponent } from './contacto-especial-eliminar-screen.component';

describe('ContactoEspecialEliminarScreenComponent', () => {
  let component: ContactoEspecialEliminarScreenComponent;
  let fixture: ComponentFixture<ContactoEspecialEliminarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoEspecialEliminarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoEspecialEliminarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
