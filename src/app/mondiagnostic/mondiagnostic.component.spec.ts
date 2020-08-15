import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MondiagnosticComponent } from './mondiagnostic.component';

describe('MondiagnosticComponent', () => {
  let component: MondiagnosticComponent;
  let fixture: ComponentFixture<MondiagnosticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MondiagnosticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MondiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
