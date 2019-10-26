import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PenaltyComponent } from './penalty.component';

describe('PenaltyComponent', () => {
  let component: PenaltyComponent;
  let fixture: ComponentFixture<PenaltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PenaltyComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
