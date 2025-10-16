import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationOptionDeckComponent } from './creation-option-deck.component';

describe('CreationOptionDeckComponent', () => {
  let component: CreationOptionDeckComponent;
  let fixture: ComponentFixture<CreationOptionDeckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreationOptionDeckComponent]
    });
    fixture = TestBed.createComponent(CreationOptionDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
