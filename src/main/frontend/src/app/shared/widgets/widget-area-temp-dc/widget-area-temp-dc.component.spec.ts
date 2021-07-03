import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAreaTempDcComponent } from './widget-area-temp-dc.component';

describe('WidgetAreaTempComponent', () => {
  let component: WidgetAreaTempDcComponent;
  let fixture: ComponentFixture<WidgetAreaTempDcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetAreaTempDcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAreaTempDcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
