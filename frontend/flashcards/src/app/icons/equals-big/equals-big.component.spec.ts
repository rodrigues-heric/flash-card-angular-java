import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualsBigComponent } from './equals-big.component';

describe('EqualsBigComponent', () => {
  let component: EqualsBigComponent;
  let fixture: ComponentFixture<EqualsBigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EqualsBigComponent]
    });
    fixture = TestBed.createComponent(EqualsBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
