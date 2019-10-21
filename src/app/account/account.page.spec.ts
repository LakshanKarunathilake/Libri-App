import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPage } from './account.page';
import { ProfileComponent } from '../components/profile/profile.component';
import { BorrowingsComponent } from '../components/borrowings/borrowings.component';
import { PenaltyComponent } from '../components/penalty/penalty.component';
import { LoadingComponent } from '../components/loading/loading.component';

describe('AccountPage', () => {
  let component: AccountPage;
  let fixture: ComponentFixture<AccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccountPage,
        ProfileComponent,
        BorrowingsComponent,
        PenaltyComponent,
        LoadingComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
