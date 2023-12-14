import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifcationComponent } from './notifcation.component';

describe('NotifcationComponent', () => {
  let component: NotifcationComponent;
  let fixture: ComponentFixture<NotifcationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotifcationComponent]
    });
    fixture = TestBed.createComponent(NotifcationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
