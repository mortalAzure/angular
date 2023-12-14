import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbabyComponent } from './addbaby.component';

describe('AddbabyComponent', () => {
  let component: AddbabyComponent;
  let fixture: ComponentFixture<AddbabyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddbabyComponent]
    });
    fixture = TestBed.createComponent(AddbabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
