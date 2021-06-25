import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCardAlertComponent } from './widget-card-alert.component';

describe('WidgetCardAlertComponent', () => {
  let component: WidgetCardAlertComponent;
  let fixture: ComponentFixture<WidgetCardAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetCardAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCardAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
