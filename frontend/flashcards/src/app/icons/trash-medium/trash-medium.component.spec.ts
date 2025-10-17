import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashMediumComponent } from './trash-medium.component';

describe('TrashMediumComponent', () => {
  let component: TrashMediumComponent;
  let fixture: ComponentFixture<TrashMediumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashMediumComponent]
    });
    fixture = TestBed.createComponent(TrashMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
