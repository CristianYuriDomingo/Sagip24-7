import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnvironmentalEmergenciesPage } from './environmental-emergencies.page';

describe('EnvironmentalEmergenciesPage', () => {
  let component: EnvironmentalEmergenciesPage;
  let fixture: ComponentFixture<EnvironmentalEmergenciesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentalEmergenciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
