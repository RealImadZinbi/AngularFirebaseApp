import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvaffecteComponent } from './rdvaffecte.component';

describe('RdvaffecteComponent', () => {
  let component: RdvaffecteComponent;
  let fixture: ComponentFixture<RdvaffecteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdvaffecteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvaffecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
