import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PencilSmallComponent } from './pencil-small.component';

describe('PencilSmallComponent', () => {
  let component: PencilSmallComponent;
  let fixture: ComponentFixture<PencilSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PencilSmallComponent]
    });
    fixture = TestBed.createComponent(PencilSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
