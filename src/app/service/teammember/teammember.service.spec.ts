import { TestBed, inject } from '@angular/core/testing';

import { TeammemberService } from './teammember.service';

describe('TeammemberfactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeammemberService]
    });
  });

  it('should be created', inject([TeammemberService], (service: TeammemberService) => {
    expect(service).toBeTruthy();
  }));
});
