import { TestBed } from '@angular/core/testing';

import { HacksService } from './hacks.service';

describe('HacksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HacksService = TestBed.get(HacksService);
    expect(service).toBeTruthy();
  });
});
