import { TestBed, inject } from '@angular/core/testing';

import { MyselfService } from './myself.service';

describe('MyselfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyselfService]
    });
  });

  it('should be created', inject([MyselfService], (service: MyselfService) => {
    expect(service).toBeTruthy();
  }));
});
