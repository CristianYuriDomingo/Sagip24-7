import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BestPracticesPage } from './best-practices.page';

describe('BestPracticesPage', () => {
  let component: BestPracticesPage;
  let fixture: ComponentFixture<BestPracticesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPracticesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
