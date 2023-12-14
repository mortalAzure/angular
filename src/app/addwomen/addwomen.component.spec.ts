import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwomenComponent } from './addwomen.component';

describe('AddwomenComponent', () => {
  let component: AddwomenComponent;
  let fixture: ComponentFixture<AddwomenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddwomenComponent]
    });
    fixture = TestBed.createComponent(AddwomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
