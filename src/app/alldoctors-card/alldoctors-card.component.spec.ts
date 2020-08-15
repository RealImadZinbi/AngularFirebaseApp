import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldoctorsCardComponent } from './alldoctors-card.component';

describe('AlldoctorsCardComponent', () => {
  let component: AlldoctorsCardComponent;
  let fixture: ComponentFixture<AlldoctorsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlldoctorsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldoctorsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
