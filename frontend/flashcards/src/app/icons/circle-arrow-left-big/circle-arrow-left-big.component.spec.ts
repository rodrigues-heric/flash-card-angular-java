import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowLeftBigComponent } from './circle-arrow-left-big.component';

describe('ArrowLeftBigComponent', () => {
  let component: ArrowLeftBigComponent;
  let fixture: ComponentFixture<ArrowLeftBigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrowLeftBigComponent],
    });
    fixture = TestBed.createComponent(ArrowLeftBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
