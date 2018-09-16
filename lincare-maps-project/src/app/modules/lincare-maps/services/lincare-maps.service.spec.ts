import { TestBed, inject } from '@angular/core/testing';

import { LincareMapsService } from './lincare-maps.service';

describe('LincareMapsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LincareMapsService]
    });
  });

  it('should be created', inject([LincareMapsService], (service: LincareMapsService) => {
    expect(service).toBeTruthy();
  }));
});
