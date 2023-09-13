import { TestBed } from '@angular/core/testing';

import { EcolesService } from './ecoles.service';

describe('EcolesService', () => {
  let service: EcolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
