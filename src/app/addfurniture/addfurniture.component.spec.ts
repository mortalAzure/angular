import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfurnitureComponent } from './addfurniture.component';

describe('AddfurnitureComponent', () => {
  let component: AddfurnitureComponent;
  let fixture: ComponentFixture<AddfurnitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddfurnitureComponent]
    });
    fixture = TestBed.createComponent(AddfurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
