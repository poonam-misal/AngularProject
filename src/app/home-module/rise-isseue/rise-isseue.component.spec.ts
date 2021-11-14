import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiseIsseueComponent } from './rise-isseue.component';

describe('RiseIsseueComponent', () => {
  let component: RiseIsseueComponent;
  let fixture: ComponentFixture<RiseIsseueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiseIsseueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiseIsseueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
