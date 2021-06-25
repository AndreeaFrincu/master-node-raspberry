import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAreaTempComponent } from './widget-area-temp.component';

describe('WidgetAreaTempComponent', () => {
  let component: WidgetAreaTempComponent;
  let fixture: ComponentFixture<WidgetAreaTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetAreaTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAreaTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
