import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TraumaticInjuriesPage } from './traumatic-injuries.page';

describe('TraumaticInjuriesPage', () => {
  let component: TraumaticInjuriesPage;
  let fixture: ComponentFixture<TraumaticInjuriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TraumaticInjuriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
