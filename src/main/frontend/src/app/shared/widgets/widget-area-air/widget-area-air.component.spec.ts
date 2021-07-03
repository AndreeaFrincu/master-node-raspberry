import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAreaAirComponent } from './widget-area-air.component';

describe('WidgetAreaAirComponent', () => {
  let component: WidgetAreaAirComponent;
  let fixture: ComponentFixture<WidgetAreaAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetAreaAirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAreaAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
