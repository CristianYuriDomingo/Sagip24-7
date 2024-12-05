import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MythsPage } from './myths.page';

describe('MythsPage', () => {
  let component: MythsPage;
  let fixture: ComponentFixture<MythsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MythsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
