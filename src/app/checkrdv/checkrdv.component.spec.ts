import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckrdvComponent } from './checkrdv.component';

describe('CheckrdvComponent', () => {
  let component: CheckrdvComponent;
  let fixture: ComponentFixture<CheckrdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckrdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckrdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
