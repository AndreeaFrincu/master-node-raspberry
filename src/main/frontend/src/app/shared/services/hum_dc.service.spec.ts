import { TestBed } from '@angular/core/testing';

import { Hum_dcService } from './hum_dc.service';

describe('HumService', () => {
  let service: Hum_dcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hum_dcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
