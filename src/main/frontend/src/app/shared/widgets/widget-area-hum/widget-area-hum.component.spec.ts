import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAreaHumComponent } from './widget-area-hum.component';

describe('WidgetAreaHumComponent', () => {
  let component: WidgetAreaHumComponent;
  let fixture: ComponentFixture<WidgetAreaHumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetAreaHumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAreaHumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
