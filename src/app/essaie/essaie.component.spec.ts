import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssaieComponent } from './essaie.component';

describe('EssaieComponent', () => {
  let component: EssaieComponent;
  let fixture: ComponentFixture<EssaieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssaieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
