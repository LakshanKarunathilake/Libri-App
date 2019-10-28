import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemTransferComponent } from './item-transfer.component';
import { BookServiceStub, SwalServiceStub } from 'src/app/Stubs';
import { BookService } from 'src/app/services/book/book.service';
import { SwalService } from 'src/app/services/swal/swal.service';

describe('ItemTransferComponent', () => {
  let component: ItemTransferComponent;
  let fixture: ComponentFixture<ItemTransferComponent>;
  const borrowingDetails = {
    issue_id: 4,
    date_due: 'date_due',
    renewals: 4,
    title: 'title',
    issuedate: 'issuedate',
    cardNumber: 'cardNumber'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemTransferComponent],
      providers: [
        { provide: BookService, useClass: BookServiceStub },
        { provide: SwalService, useClass: SwalServiceStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTransferComponent);
    component = fixture.componentInstance;
    component.moveHeader = () => {
      console.log('Changing routes');
    };
    component.borrowDetails = borrowingDetails;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
