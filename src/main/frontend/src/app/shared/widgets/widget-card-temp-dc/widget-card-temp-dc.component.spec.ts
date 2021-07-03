import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCardTempDcComponent } from './widget-card-temp-dc.component';

describe('WidgetCardTempDcComponent', () => {
  let component: WidgetCardTempDcComponent;
  let fixture: ComponentFixture<WidgetCardTempDcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetCardTempDcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCardTempDcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
