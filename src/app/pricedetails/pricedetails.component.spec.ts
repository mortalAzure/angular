import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricedetailsComponent } from './pricedetails.component';

describe('PricedetailsComponent', () => {
  let component: PricedetailsComponent;
  let fixture: ComponentFixture<PricedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricedetailsComponent]
    });
    fixture = TestBed.createComponent(PricedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
