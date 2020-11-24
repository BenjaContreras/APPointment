import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoresScreenComponent } from './doctores-screen.component';

describe('DoctoresScreenComponent', () => {
  let component: DoctoresScreenComponent;
  let fixture: ComponentFixture<DoctoresScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctoresScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoresScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
