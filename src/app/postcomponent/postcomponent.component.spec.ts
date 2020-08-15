import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcomponentComponent } from './postcomponent.component';

describe('PostcomponentComponent', () => {
  let component: PostcomponentComponent;
  let fixture: ComponentFixture<PostcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
