import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemTransferComponent } from './item-transfer.component';

describe('ItemTransferComponent', () => {
  let component: ItemTransferComponent;
  let fixture: ComponentFixture<ItemTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemTransferComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
