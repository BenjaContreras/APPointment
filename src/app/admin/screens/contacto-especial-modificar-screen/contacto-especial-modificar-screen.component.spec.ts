import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoEspecialModificarScreenComponent } from './contacto-especial-modificar-screen.component';

describe('ContactoEspecialModificarScreenComponent', () => {
  let component: ContactoEspecialModificarScreenComponent;
  let fixture: ComponentFixture<ContactoEspecialModificarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoEspecialModificarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoEspecialModificarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
