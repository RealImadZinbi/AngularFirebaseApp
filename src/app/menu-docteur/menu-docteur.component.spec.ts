import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDocteurComponent } from './menu-docteur.component';

describe('MenuDocteurComponent', () => {
  let component: MenuDocteurComponent;
  let fixture: ComponentFixture<MenuDocteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDocteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
