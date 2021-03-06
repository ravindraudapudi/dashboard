import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthRateComponent } from './growth-rate.widget';

describe('GrowthRateComponent', () => {
  let component: GrowthRateComponent;
  let fixture: ComponentFixture<GrowthRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowthRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
