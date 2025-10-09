import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclePlusBigComponent } from './circle-plus-big.component';

describe('CirclePlusBigComponent', () => {
  let component: CirclePlusBigComponent;
  let fixture: ComponentFixture<CirclePlusBigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CirclePlusBigComponent]
    });
    fixture = TestBed.createComponent(CirclePlusBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
