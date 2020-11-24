import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuentranosScreenComponent } from './encuentranos-screen.component';

describe('EncuentranosScreenComponent', () => {
  let component: EncuentranosScreenComponent;
  let fixture: ComponentFixture<EncuentranosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuentranosScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuentranosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
