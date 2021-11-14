import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVaccinationComponent } from './search-vaccination.component';

describe('SearchVaccinationComponent', () => {
  let component: SearchVaccinationComponent;
  let fixture: ComponentFixture<SearchVaccinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchVaccinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
