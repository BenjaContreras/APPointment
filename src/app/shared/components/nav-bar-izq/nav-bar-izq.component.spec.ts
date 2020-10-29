import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarIzqComponent } from './nav-bar-izq.component';

describe('NavBarIzqComponent', () => {
  let component: NavBarIzqComponent;
  let fixture: ComponentFixture<NavBarIzqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarIzqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarIzqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
