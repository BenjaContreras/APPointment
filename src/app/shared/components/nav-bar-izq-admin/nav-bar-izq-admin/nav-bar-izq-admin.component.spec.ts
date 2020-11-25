import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarIzqAdminComponent } from './nav-bar-izq-admin.component';

describe('NavBarIzqAdminComponent', () => {
  let component: NavBarIzqAdminComponent;
  let fixture: ComponentFixture<NavBarIzqAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarIzqAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarIzqAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
