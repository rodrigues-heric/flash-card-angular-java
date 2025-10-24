import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleArrowRightBigComponent } from './circle-arrow-right-big.component';

describe('CircleArrowRightBigComponent', () => {
  let component: CircleArrowRightBigComponent;
  let fixture: ComponentFixture<CircleArrowRightBigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircleArrowRightBigComponent]
    });
    fixture = TestBed.createComponent(CircleArrowRightBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
