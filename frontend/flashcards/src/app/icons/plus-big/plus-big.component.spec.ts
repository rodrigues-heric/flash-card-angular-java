import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusBigComponent } from './plus-big.component';

describe('PlusBigComponent', () => {
  let component: PlusBigComponent;
  let fixture: ComponentFixture<PlusBigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlusBigComponent]
    });
    fixture = TestBed.createComponent(PlusBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
