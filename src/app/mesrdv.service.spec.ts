import { TestBed } from '@angular/core/testing';

import { MesrdvService } from './mesrdv.service';

describe('MesrdvService', () => {
  let service: MesrdvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesrdvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
