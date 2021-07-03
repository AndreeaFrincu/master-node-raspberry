import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAreaHumShComponent } from './widget-area-hum-sh.component';

describe('WidgetAreaHumComponent', () => {
  let component: WidgetAreaHumShComponent;
  let fixture: ComponentFixture<WidgetAreaHumShComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetAreaHumShComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAreaHumShComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
