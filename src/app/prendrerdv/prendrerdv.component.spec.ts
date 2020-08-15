import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrendrerdvComponent } from './prendrerdv.component';

describe('PrendrerdvComponent', () => {
  let component: PrendrerdvComponent;
  let fixture: ComponentFixture<PrendrerdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrendrerdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrendrerdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
