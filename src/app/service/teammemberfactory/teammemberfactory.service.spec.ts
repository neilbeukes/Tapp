import { TestBed, inject } from '@angular/core/testing';

import { TeammemberfactoryService } from './teammemberfactory.service';

describe('TeammemberfactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeammemberfactoryService]
    });
  });

  it('should be created', inject([TeammemberfactoryService], (service: TeammemberfactoryService) => {
    expect(service).toBeTruthy();
  }));
});
