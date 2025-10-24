import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclePlayBigComponent } from './circle-play-big.component';

describe('CirclePlayBigComponent', () => {
  let component: CirclePlayBigComponent;
  let fixture: ComponentFixture<CirclePlayBigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CirclePlayBigComponent]
    });
    fixture = TestBed.createComponent(CirclePlayBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
