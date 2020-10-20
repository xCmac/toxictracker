import { TestBed } from '@angular/core/testing';

import { ToxicserviceService } from './toxicservice.service';

describe('ToxicserviceService', () => {
  let service: ToxicserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToxicserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
