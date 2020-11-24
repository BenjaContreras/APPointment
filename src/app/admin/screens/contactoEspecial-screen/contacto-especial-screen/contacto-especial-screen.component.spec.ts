import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoEspecialScreenComponent } from './contacto-especial-screen.component';

describe('ContactoEspecialScreenComponent', () => {
  let component: ContactoEspecialScreenComponent;
  let fixture: ComponentFixture<ContactoEspecialScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoEspecialScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoEspecialScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
