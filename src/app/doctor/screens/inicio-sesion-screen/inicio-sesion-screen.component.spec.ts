import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSesionScreenComponent } from './inicio-sesion-screen.component';

describe('InicioSesionScreenComponent', () => {
  let component: InicioSesionScreenComponent;
  let fixture: ComponentFixture<InicioSesionScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioSesionScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioSesionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
