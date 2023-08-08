import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutLayoutComponent } from './without-layout.component';

describe('WithoutLayoutComponent', () => {
  let component: WithoutLayoutComponent;
  let fixture: ComponentFixture<WithoutLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithoutLayoutComponent]
    });
    fixture = TestBed.createComponent(WithoutLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
