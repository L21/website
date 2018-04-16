import { TestBed, inject } from '@angular/core/testing';

import { ProjectsInfoService } from './projects-info.service';

describe('ProjectsInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsInfoService]
    });
  });

  it('should be created', inject([ProjectsInfoService], (service: ProjectsInfoService) => {
    expect(service).toBeTruthy();
  }));
});
