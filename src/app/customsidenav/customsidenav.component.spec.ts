import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomsidenavComponent } from './customsidenav.component';

describe('CustomsidenavComponent', () => {
  let component: CustomsidenavComponent;
  let fixture: ComponentFixture<CustomsidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomsidenavComponent]
    });
    fixture = TestBed.createComponent(CustomsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
