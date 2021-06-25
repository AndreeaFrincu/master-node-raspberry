import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAreaLightComponent } from './widget-area-light.component';

describe('WidgetAreaLightComponent', () => {
  let component: WidgetAreaLightComponent;
  let fixture: ComponentFixture<WidgetAreaLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetAreaLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAreaLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
