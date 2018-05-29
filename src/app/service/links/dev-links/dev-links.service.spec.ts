import { TestBed, inject } from '@angular/core/testing';

import { DevLinksService } from './dev-links.service';

describe('LinksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevLinksService]
    });
  });

  it('should be created', inject([DevLinksService], (service: DevLinksService) => {
    expect(service).toBeTruthy();
  }));
});
