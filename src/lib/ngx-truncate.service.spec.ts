import { NgxTruncateService } from "./ngx-truncate.service";
import { TestBed } from "@angular/core/testing";

describe("NgxTruncate.service.tsService", () => {

  let service: NgxTruncateService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NgxTruncateService
      ]
    });
    service = TestBed.get(NgxTruncateService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
