import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BorrowingsComponent } from './borrowings.component';

describe('BorrowingsComponent', () => {
  let component: BorrowingsComponent;
  let fixture: ComponentFixture<BorrowingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowingsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
