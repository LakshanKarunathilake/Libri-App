import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferPage } from './transfer.page';
import { QRCodeModule } from 'angularx-qrcode';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { BookService } from '../services/book/book.service';
import { UserService } from '../services/user/user.service';
import { BookServiceStub, UserServiceStub } from '../Stubs';

describe('TransferPage', () => {
  let component: TransferPage;
  let fixture: ComponentFixture<TransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [QRCodeModule, MatTableModule],
      providers: [
        BarcodeScanner,
        { provide: BookService, userClass: BookServiceStub },
        { provide: UserService, useClass: UserServiceStub }
      ],
      declarations: [TransferPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferPage);
    component = fixture.componentInstance;
    component.transferReqeustDocument = 'DUMMY RECORD';
    component.dataSource = new MatTableDataSource();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
