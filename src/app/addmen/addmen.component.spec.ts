import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmenComponent } from './addmen.component';

describe('AddmenComponent', () => {
  let component: AddmenComponent;
  let fixture: ComponentFixture<AddmenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddmenComponent]
    });
    fixture = TestBed.createComponent(AddmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
