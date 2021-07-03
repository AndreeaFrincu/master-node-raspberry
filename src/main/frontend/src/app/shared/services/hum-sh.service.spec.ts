import { TestBed } from '@angular/core/testing';

import { HumShService } from './hum-sh.service';

describe('HumShService', () => {
  let service: HumShService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HumShService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
