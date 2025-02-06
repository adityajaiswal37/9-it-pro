import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerRecruitmentProcessComponent } from './employer-recruitment-process.component';

describe('EmployerRecruitmentProcessComponent', () => {
  let component: EmployerRecruitmentProcessComponent;
  let fixture: ComponentFixture<EmployerRecruitmentProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerRecruitmentProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerRecruitmentProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
