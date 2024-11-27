import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllergicInsectBitesPage } from './allergic-insect-bites.page';

describe('AllergicInsectBitesPage', () => {
  let component: AllergicInsectBitesPage;
  let fixture: ComponentFixture<AllergicInsectBitesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergicInsectBitesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
