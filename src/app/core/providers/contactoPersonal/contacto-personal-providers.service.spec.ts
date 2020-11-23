import { TestBed } from '@angular/core/testing';

import { ContactoPersonalProvidersService } from './contacto-personal-providers.service';

describe('ContactoPersonalProvidersService', () => {
  let service: ContactoPersonalProvidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactoPersonalProvidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
