import { TestBed } from '@angular/core/testing';

import { AuthenticationDoctorService } from './authentication-doctor.service';

describe('AuthenticationDoctorService', () => {
  let service: AuthenticationDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
