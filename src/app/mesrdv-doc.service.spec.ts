import { TestBed } from '@angular/core/testing';

import { MesrdvDocService } from './mesrdv-doc.service';

describe('MesrdvDocService', () => {
  let service: MesrdvDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesrdvDocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
