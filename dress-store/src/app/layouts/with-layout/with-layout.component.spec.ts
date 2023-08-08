import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithLayoutComponent } from './with-layout.component';

describe('WithLayoutComponent', () => {
  let component: WithLayoutComponent;
  let fixture: ComponentFixture<WithLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithLayoutComponent]
    });
    fixture = TestBed.createComponent(WithLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
