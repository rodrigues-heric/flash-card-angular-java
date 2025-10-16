import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossBigComponent } from './cross-big.component';

describe('CrossBigComponent', () => {
  let component: CrossBigComponent;
  let fixture: ComponentFixture<CrossBigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrossBigComponent]
    });
    fixture = TestBed.createComponent(CrossBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
