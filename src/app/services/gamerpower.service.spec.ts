import { TestBed } from '@angular/core/testing';

import { GamerpowerService } from './gamerpower.service';

describe('GamerpowerService', () => {
  let service: GamerpowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamerpowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
