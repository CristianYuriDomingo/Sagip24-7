import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RespiratoryEmergenciesPage } from './respiratory-emergencies.page';

describe('RespiratoryEmergenciesPage', () => {
  let component: RespiratoryEmergenciesPage;
  let fixture: ComponentFixture<RespiratoryEmergenciesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RespiratoryEmergenciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
