import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B1calculatorComponent } from './b1calculator.component';

describe('B1calculatorComponent', () => {
  let component: B1calculatorComponent;
  let fixture: ComponentFixture<B1calculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B1calculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B1calculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
