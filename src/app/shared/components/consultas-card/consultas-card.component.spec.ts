import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasCardComponent } from './consultas-card.component';

describe('ConsultasCardComponent', () => {
  let component: ConsultasCardComponent;
  let fixture: ComponentFixture<ConsultasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
