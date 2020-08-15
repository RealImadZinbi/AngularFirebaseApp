import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocteurComponent } from './docteur.component';

describe('DocteurComponent', () => {
  let component: DocteurComponent;
  let fixture: ComponentFixture<DocteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
