import { TestBed } from '@angular/core/testing';

import { Temp_dcService } from './temp_dc.service';

describe('TempService', () => {
  let service: Temp_dcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Temp_dcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
