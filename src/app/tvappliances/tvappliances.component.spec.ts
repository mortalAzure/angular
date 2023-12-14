import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvappliancesComponent } from './tvappliances.component';

describe('TvappliancesComponent', () => {
  let component: TvappliancesComponent;
  let fixture: ComponentFixture<TvappliancesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvappliancesComponent]
    });
    fixture = TestBed.createComponent(TvappliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
