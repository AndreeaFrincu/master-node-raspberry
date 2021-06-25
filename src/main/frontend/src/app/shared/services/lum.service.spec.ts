import { TestBed } from '@angular/core/testing';

import { LumService } from './lum.service';

describe('LumService', () => {
  let service: LumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
