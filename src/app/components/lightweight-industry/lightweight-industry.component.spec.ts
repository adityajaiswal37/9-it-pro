import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightweightIndustryComponent } from './lightweight-industry.component';

describe('LightweightIndustryComponent', () => {
  let component: LightweightIndustryComponent;
  let fixture: ComponentFixture<LightweightIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightweightIndustryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightweightIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
