import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterkeyComponent } from './masterkey.component';

describe('MasterkeyComponent', () => {
  let component: MasterkeyComponent;
  let fixture: ComponentFixture<MasterkeyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterkeyComponent]
    });
    fixture = TestBed.createComponent(MasterkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
