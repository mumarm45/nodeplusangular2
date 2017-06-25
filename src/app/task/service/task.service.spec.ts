import { TestBed, inject } from '@angular/core/testing';

import { UndefinedService } from './undefined.service';

describe('UndefinedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UndefinedService]
    });
  });

  it('should be created', inject([UndefinedService], (service: UndefinedService) => {
    expect(service).toBeTruthy();
  }));
});
