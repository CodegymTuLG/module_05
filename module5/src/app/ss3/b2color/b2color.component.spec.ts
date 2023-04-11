import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2colorComponent } from './b2color.component';

describe('B2colorComponent', () => {
  let component: B2colorComponent;
  let fixture: ComponentFixture<B2colorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2colorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2colorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
