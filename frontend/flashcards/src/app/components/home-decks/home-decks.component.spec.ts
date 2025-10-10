import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDecksComponent } from './home-decks.component';

describe('HomeDecksComponent', () => {
  let component: HomeDecksComponent;
  let fixture: ComponentFixture<HomeDecksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDecksComponent]
    });
    fixture = TestBed.createComponent(HomeDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
