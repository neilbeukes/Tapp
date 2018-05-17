import { TestBed, inject } from '@angular/core/testing';

import { TeamDataService } from './teamservice.service';

describe('TeamserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamDataService]
    });
  });

  it('should be created', inject([TeamDataService], (service: TeamDataService) => {
    expect(service).toBeTruthy();
  }));
});
