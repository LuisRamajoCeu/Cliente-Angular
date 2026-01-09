import { TestBed } from '@angular/core/testing';

import { Repaso1Service } from './repaso1-service';

describe('Repaso1Service', () => {
  let service: Repaso1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Repaso1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
