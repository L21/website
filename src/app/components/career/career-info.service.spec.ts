import { TestBed, inject } from '@angular/core/testing';

import { CareerInfoService } from './career-info.service';

describe('CareerInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CareerInfoService]
    });
  });

  it('should be created', inject([CareerInfoService], (service: CareerInfoService) => {
    expect(service).toBeTruthy();
  }));
});
