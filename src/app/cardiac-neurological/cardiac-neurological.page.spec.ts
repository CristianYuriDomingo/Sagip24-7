import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardiacNeurologicalPage } from './cardiac-neurological.page';

describe('CardiacNeurologicalPage', () => {
  let component: CardiacNeurologicalPage;
  let fixture: ComponentFixture<CardiacNeurologicalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CardiacNeurologicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
