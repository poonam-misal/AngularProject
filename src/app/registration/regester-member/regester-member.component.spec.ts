import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegesterMemberComponent } from './regester-member.component';

describe('RegesterMemberComponent', () => {
  let component: RegesterMemberComponent;
  let fixture: ComponentFixture<RegesterMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegesterMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegesterMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
