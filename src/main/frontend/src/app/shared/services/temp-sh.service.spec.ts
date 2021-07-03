import { TestBed } from '@angular/core/testing';

import { TempShService } from './temp-sh.service';

describe('TempShService', () => {
  let service: TempShService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempShService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
