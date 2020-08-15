import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldoctorsFilterComponent } from './alldoctors-filter.component';

describe('AlldoctorsFilterComponent', () => {
  let component: AlldoctorsFilterComponent;
  let fixture: ComponentFixture<AlldoctorsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlldoctorsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldoctorsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
