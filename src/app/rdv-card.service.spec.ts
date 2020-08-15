import { TestBed } from '@angular/core/testing';

import { RdvCardService } from './rdv-card.service';

describe('RdvCardService', () => {
  let service: RdvCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdvCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
