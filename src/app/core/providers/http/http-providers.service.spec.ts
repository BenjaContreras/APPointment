import { TestBed } from '@angular/core/testing';

import { HttpProvidersService } from './http-providers.service';

describe('HttpProvidersService', () => {
  let service: HttpProvidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpProvidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
