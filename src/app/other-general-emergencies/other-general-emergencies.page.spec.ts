import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtherGeneralEmergenciesPage } from './other-general-emergencies.page';

describe('OtherGeneralEmergenciesPage', () => {
  let component: OtherGeneralEmergenciesPage;
  let fixture: ComponentFixture<OtherGeneralEmergenciesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherGeneralEmergenciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
