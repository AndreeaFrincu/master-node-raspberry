import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAreaTempShComponent } from './widget-area-temp-sh.component';

describe('WidgetAreaTempComponent', () => {
  let component: WidgetAreaTempShComponent;
  let fixture: ComponentFixture<WidgetAreaTempShComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetAreaTempShComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAreaTempShComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
