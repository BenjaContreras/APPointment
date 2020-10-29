import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactanosScreenComponent } from './contactanos-screen.component';

describe('ContactanosScreenComponent', () => {
  let component: ContactanosScreenComponent;
  let fixture: ComponentFixture<ContactanosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactanosScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactanosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
