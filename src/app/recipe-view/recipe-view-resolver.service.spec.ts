import { TestBed } from '@angular/core/testing';

import { RecipeViewResolverService } from './recipe-view-resolver.service';

describe('RecipeViewResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeViewResolverService = TestBed.get(RecipeViewResolverService);
    expect(service).toBeTruthy();
  });
});
