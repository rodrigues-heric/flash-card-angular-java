import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleArrowRightSmallComponent } from './circle-arrow-right-small.component';

describe('CircleArrowRightSmallComponent', () => {
  let component: CircleArrowRightSmallComponent;
  let fixture: ComponentFixture<CircleArrowRightSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircleArrowRightSmallComponent]
    });
    fixture = TestBed.createComponent(CircleArrowRightSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
