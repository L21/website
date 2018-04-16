import { TestBed, inject } from '@angular/core/testing';

import { EducationInfoService } from './education-info.service';

describe('EducationInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EducationInfoService]
    });
  });

  it('should be created', inject([EducationInfoService], (service: EducationInfoService) => {
    expect(service).toBeTruthy();
  }));
});
