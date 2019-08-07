import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTransferPage } from './item-transfer.page';

describe('ItemTransferPage', () => {
  let component: ItemTransferPage;
  let fixture: ComponentFixture<ItemTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTransferPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
