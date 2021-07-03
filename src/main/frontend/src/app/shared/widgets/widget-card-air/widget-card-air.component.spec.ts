import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCardAirComponent } from './widget-card-air.component';

describe('WidgetCardAirComponent', () => {
  let component: WidgetCardAirComponent;
  let fixture: ComponentFixture<WidgetCardAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetCardAirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCardAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
