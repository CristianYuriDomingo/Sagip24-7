import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmergencyResponsePage } from './emergency-response.page';

describe('EmergencyResponsePage', () => {
  let component: EmergencyResponsePage;
  let fixture: ComponentFixture<EmergencyResponsePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyResponsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
