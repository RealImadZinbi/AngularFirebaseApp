import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignopComponent } from './signop.component';

describe('SignopComponent', () => {
  let component: SignopComponent;
  let fixture: ComponentFixture<SignopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
