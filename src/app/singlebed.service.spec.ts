import { TestBed } from '@angular/core/testing';

import { SinglebedService } from './singlebed.service';

describe('SinglebedService', () => {
  let service: SinglebedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinglebedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
