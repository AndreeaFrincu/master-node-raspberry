import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCardTempShComponent } from './widget-card-temp-sh.component';

describe('WidgetCardTempShComponent', () => {
  let component: WidgetCardTempShComponent;
  let fixture: ComponentFixture<WidgetCardTempShComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetCardTempShComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCardTempShComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
