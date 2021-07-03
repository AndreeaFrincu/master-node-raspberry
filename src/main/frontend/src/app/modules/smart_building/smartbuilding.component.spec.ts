import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smartbuilding } from './smartbuilding';

describe('DashboardComponent', () => {
  let component: Smartbuilding;
  let fixture: ComponentFixture<Smartbuilding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Smartbuilding ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Smartbuilding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
