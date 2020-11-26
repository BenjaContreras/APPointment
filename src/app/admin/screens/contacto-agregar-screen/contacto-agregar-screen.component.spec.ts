import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoAgregarScreenComponent } from './contacto-agregar-screen.component';

describe('ContactoAgregarScreenComponent', () => {
  let component: ContactoAgregarScreenComponent;
  let fixture: ComponentFixture<ContactoAgregarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoAgregarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoAgregarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
