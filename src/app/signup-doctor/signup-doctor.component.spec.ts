import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDoctorComponent } from './signup-doctor.component';

describe('SignupDoctorComponent', () => {
  let component: SignupDoctorComponent;
  let fixture: ComponentFixture<SignupDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
