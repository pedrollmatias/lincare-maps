import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmIndexComponent } from './lm-index.component';

describe('LmIndexComponent', () => {
  let component: LmIndexComponent;
  let fixture: ComponentFixture<LmIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
