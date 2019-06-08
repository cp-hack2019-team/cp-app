import { TestBed } from '@angular/core/testing';

import { PatientListResolverService } from './patient-list-resolver.service';

describe('PatientListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientListResolverService = TestBed.get(PatientListResolverService);
    expect(service).toBeTruthy();
  });
});
