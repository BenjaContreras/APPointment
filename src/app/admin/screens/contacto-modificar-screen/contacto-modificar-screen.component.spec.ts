import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoModificarScreenComponent } from './contacto-modificar-screen.component';

describe('ContactoModificarScreenComponent', () => {
  let component: ContactoModificarScreenComponent;
  let fixture: ComponentFixture<ContactoModificarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoModificarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoModificarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
