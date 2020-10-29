import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSesionUsuarioScreenComponent } from './inicio-sesion-usuario-screen.component';

describe('InicioSesionUsuarioScreenComponent', () => {
  let component: InicioSesionUsuarioScreenComponent;
  let fixture: ComponentFixture<InicioSesionUsuarioScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioSesionUsuarioScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioSesionUsuarioScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
