import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SymptomCheckerPage } from './symptom-checker.page';

describe('SymptomCheckerPage', () => {
  let component: SymptomCheckerPage;
  let fixture: ComponentFixture<SymptomCheckerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomCheckerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
