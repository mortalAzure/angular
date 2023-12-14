import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddappliancesComponent } from './addappliances.component';

describe('AddappliancesComponent', () => {
  let component: AddappliancesComponent;
  let fixture: ComponentFixture<AddappliancesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddappliancesComponent]
    });
    fixture = TestBed.createComponent(AddappliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
