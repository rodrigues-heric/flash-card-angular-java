import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderOpenMediumComponent } from './folder-open-medium.component';

describe('FolderOpenMediumComponent', () => {
  let component: FolderOpenMediumComponent;
  let fixture: ComponentFixture<FolderOpenMediumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FolderOpenMediumComponent]
    });
    fixture = TestBed.createComponent(FolderOpenMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
