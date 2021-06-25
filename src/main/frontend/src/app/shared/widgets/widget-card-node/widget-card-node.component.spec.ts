import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCardNodeComponent } from './widget-card-node.component';

describe('WidgetCardNodeComponent', () => {
  let component: WidgetCardNodeComponent;
  let fixture: ComponentFixture<WidgetCardNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetCardNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCardNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
