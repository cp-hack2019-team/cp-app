import { TestBed } from '@angular/core/testing';

import { DoctorListResolverService } from './doctor-list-resolver.service';

describe('DoctorListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctorListResolverService = TestBed.get(DoctorListResolverService);
    expect(service).toBeTruthy();
  });
});
