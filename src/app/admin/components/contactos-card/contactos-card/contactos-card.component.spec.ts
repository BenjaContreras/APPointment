import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosCardComponent } from './contactos-card.component';

describe('ContactosCardComponent', () => {
  let component: ContactosCardComponent;
  let fixture: ComponentFixture<ContactosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactosCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
