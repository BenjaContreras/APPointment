import { TestBed } from '@angular/core/testing';

import { CitasProvidersService } from './citas-providers.service';

describe('CitasProvidersService', () => {
  let service: CitasProvidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitasProvidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
