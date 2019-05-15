import { TestBed, inject } from "@angular/core/testing";

import { AcronymService } from "./acronym.service";

describe("AcronymService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcronymService]
    });
  });

  it("should be created", inject(
    [AcronymService],
    (service: AcronymService) => {
      expect(service).toBeTruthy();
    }
  ));
});
