import { TestBed } from '@angular/core/testing';

import { PillsResolverService } from './pills-resolver.service';

describe('PillsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PillsResolverService = TestBed.get(PillsResolverService);
    expect(service).toBeTruthy();
  });
});
