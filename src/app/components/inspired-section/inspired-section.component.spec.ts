import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspiredSectionComponent } from './inspired-section.component';

describe('InspiredSectionComponent', () => {
  let component: InspiredSectionComponent;
  let fixture: ComponentFixture<InspiredSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InspiredSectionComponent]
    });
    fixture = TestBed.createComponent(InspiredSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
