import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElectronicsComponent } from './add-electronics.component';

describe('AddElectronicsComponent', () => {
  let component: AddElectronicsComponent;
  let fixture: ComponentFixture<AddElectronicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddElectronicsComponent]
    });
    fixture = TestBed.createComponent(AddElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
