import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosEspecialesCardComponent } from './contactos-especiales-card.component';

describe('ContactosEspecialesCardComponent', () => {
  let component: ContactosEspecialesCardComponent;
  let fixture: ComponentFixture<ContactosEspecialesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactosEspecialesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactosEspecialesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
