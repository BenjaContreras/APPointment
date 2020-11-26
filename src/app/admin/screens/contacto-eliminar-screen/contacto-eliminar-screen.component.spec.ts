import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoEliminarScreenComponent } from './contacto-eliminar-screen.component';

describe('ContactoEliminarScreenComponent', () => {
  let component: ContactoEliminarScreenComponent;
  let fixture: ComponentFixture<ContactoEliminarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoEliminarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoEliminarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
