import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelIdComponent } from './del-id.component';

describe('DelIdComponent', () => {
  let component: DelIdComponent;
  let fixture: ComponentFixture<DelIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
