import { TestBed } from '@angular/core/testing';

import { PacienteProvidersService } from './paciente-providers.service';

describe('PacienteProvidersService', () => {
  let service: PacienteProvidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacienteProvidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
