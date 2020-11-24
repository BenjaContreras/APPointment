import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasScreenComponent } from './citas-screen.component';

describe('CitasScreenComponent', () => {
  let component: CitasScreenComponent;
  let fixture: ComponentFixture<CitasScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitasScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
