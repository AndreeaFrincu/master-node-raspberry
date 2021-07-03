import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCardHumShComponent } from './widget-card-hum-sh.component';

describe('WidgetCardHumComponent', () => {
  let component: WidgetCardHumShComponent;
  let fixture: ComponentFixture<WidgetCardHumShComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetCardHumShComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCardHumShComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
