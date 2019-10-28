import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BorrowingsComponent } from './borrowings.component';
import { UserService } from 'src/app/services/user/user.service';
import { UserServiceStub } from 'src/app/Stubs';

describe('BorrowingsComponent', () => {
  let component: BorrowingsComponent;
  let fixture: ComponentFixture<BorrowingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowingsComponent],
      providers: [{ provide: UserService, useClass: UserServiceStub }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create borrowings component view', () => {
    expect(component).toBeTruthy();
  });

  it('should return user borrowings after loading', () => {
    expect(component.overdues).not.toBeNull();
  });
});
