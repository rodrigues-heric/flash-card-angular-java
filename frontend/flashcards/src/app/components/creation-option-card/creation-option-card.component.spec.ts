import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOptionCardComponent } from './creation-option-card.component';

describe('CreateOptionCardComponent', () => {
  let component: CreateOptionCardComponent;
  let fixture: ComponentFixture<CreateOptionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOptionCardComponent],
    });
    fixture = TestBed.createComponent(CreateOptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
