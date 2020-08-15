import { TestBed } from '@angular/core/testing';

import { AuthenticationAdminService } from './authentication-admin.service';

describe('AuthenticationAdminService', () => {
  let service: AuthenticationAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
