import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationCountComponent } from './vaccination-count.component';

describe('VaccinationCountComponent', () => {
  let component: VaccinationCountComponent;
  let fixture: ComponentFixture<VaccinationCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
