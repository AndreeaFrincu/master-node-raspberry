import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAreaHumDcComponent } from './widget-area-hum-dc.component';

describe('WidgetAreaHumComponent', () => {
  let component: WidgetAreaHumDcComponent;
  let fixture: ComponentFixture<WidgetAreaHumDcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetAreaHumDcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAreaHumDcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
