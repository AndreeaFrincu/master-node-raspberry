import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCardHumComponent } from './widget-card-hum.component';

describe('WidgetCardHumComponent', () => {
  let component: WidgetCardHumComponent;
  let fixture: ComponentFixture<WidgetCardHumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetCardHumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCardHumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
