import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualAidsPage } from './visual-aids.page';

describe('VisualAidsPage', () => {
  let component: VisualAidsPage;
  let fixture: ComponentFixture<VisualAidsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualAidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
