import { TestBed } from '@angular/core/testing';

import { HumbleBundlesService } from './humble-bundles.service';

describe('HumbleBundlesService', () => {
  let service: HumbleBundlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HumbleBundlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
