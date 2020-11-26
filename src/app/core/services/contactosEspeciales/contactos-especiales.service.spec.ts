import { TestBed } from '@angular/core/testing';

import { ContactosEspecialesService } from './contactos-especiales.service';

describe('ContactosEspecialesService', () => {
  let service: ContactosEspecialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactosEspecialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
