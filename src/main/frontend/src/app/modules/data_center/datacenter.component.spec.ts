import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacenterComponent } from './datacenter.component';

describe('NodesComponent', () => {
  let component: DatacenterComponent;
  let fixture: ComponentFixture<DatacenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatacenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
