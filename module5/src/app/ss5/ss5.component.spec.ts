import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ss5Component } from './ss5.component';

describe('Ss5Component', () => {
  let component: Ss5Component;
  let fixture: ComponentFixture<Ss5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ss5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ss5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
