import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTabMenuPage } from './account-tab-menu.page';

describe('AccountTabMenuPage', () => {
  let component: AccountTabMenuPage;
  let fixture: ComponentFixture<AccountTabMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTabMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTabMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
