import { TestBed, inject } from '@angular/core/testing';

import { GeneralLinksService } from './general-links.service';

describe('GeneralLinksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralLinksService]
    });
  });

  it('should be created', inject([GeneralLinksService], (service: GeneralLinksService) => {
    expect(service).toBeTruthy();
  }));
});
