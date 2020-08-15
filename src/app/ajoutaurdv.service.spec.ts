import { TestBed } from '@angular/core/testing';

import { AjoutaurdvService } from './ajoutaurdv.service';

describe('AjoutaurdvService', () => {
  let service: AjoutaurdvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutaurdvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
