import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCardLightComponent } from './widget-card-light.component';

describe('WidgetCardLightComponent', () => {
  let component: WidgetCardLightComponent;
  let fixture: ComponentFixture<WidgetCardLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetCardLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCardLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
