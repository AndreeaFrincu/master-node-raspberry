import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCardHumDcComponent } from './widget-card-hum-dc.component';

describe('WidgetCardHumComponent', () => {
  let component: WidgetCardHumDcComponent;
  let fixture: ComponentFixture<WidgetCardHumDcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetCardHumDcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCardHumDcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
