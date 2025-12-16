import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerimetrosPage } from './perimetros.page';

describe('PerimetrosPage', () => {
  let component: PerimetrosPage;
  let fixture: ComponentFixture<PerimetrosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerimetrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
