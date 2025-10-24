import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateBigComponent } from './rotate-big.component';

describe('RotateBigComponent', () => {
  let component: RotateBigComponent;
  let fixture: ComponentFixture<RotateBigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RotateBigComponent]
    });
    fixture = TestBed.createComponent(RotateBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
