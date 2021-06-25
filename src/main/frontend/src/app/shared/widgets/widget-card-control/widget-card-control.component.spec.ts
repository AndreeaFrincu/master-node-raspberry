import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCardControlComponent } from './widget-card-control.component';

describe('WidgetCardControlComponent', () => {
  let component: WidgetCardControlComponent;
  let fixture: ComponentFixture<WidgetCardControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetCardControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCardControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
