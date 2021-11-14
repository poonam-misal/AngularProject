import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepToVaccineComponent } from './step-to-vaccine.component';

describe('StepToVaccineComponent', () => {
  let component: StepToVaccineComponent;
  let fixture: ComponentFixture<StepToVaccineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepToVaccineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepToVaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
