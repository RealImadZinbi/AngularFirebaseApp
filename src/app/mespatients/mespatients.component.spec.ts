import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MespatientsComponent } from './mespatients.component';

describe('MespatientsComponent', () => {
  let component: MespatientsComponent;
  let fixture: ComponentFixture<MespatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MespatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MespatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
