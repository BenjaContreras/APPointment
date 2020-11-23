import { TestBed } from '@angular/core/testing';

import { DoctorProvidersService } from './doctor-providers.service';

describe('DoctorProvidersService', () => {
  let service: DoctorProvidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorProvidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
