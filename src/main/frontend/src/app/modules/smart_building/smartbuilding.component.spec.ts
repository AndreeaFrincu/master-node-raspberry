import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartbuildingComponent } from './smartbuilding.component';

describe('DashboardComponent', () => {
  let component: SmartbuildingComponent;
  let fixture: ComponentFixture<SmartbuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartbuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartbuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
