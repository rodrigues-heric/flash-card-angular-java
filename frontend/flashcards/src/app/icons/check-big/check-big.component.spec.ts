import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBigComponent } from './check-big.component';

describe('CheckBigComponent', () => {
  let component: CheckBigComponent;
  let fixture: ComponentFixture<CheckBigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckBigComponent]
    });
    fixture = TestBed.createComponent(CheckBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
