import { TestBed } from '@angular/core/testing';

import { ContactoProvidersService } from './contacto-providers.service';

describe('ContactoProvidersService', () => {
  let service: ContactoProvidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactoProvidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
