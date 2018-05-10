import { TestBed, inject } from '@angular/core/testing';

import { LinksfactoryService } from './linksfactory.service';

describe('LinksfactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinksfactoryService]
    });
  });

  it('should be created', inject([LinksfactoryService], (service: LinksfactoryService) => {
    expect(service).toBeTruthy();
  }));
});
