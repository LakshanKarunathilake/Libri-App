import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TransferPage } from './transfer.page';
import { MenuTitleComponentModule } from '../components/menu-title/menu-title.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ItemTransferComponent } from '../components/item-transfer/item-transfer.component';
import { QRCodeModule } from 'angularx-qrcode';
import { AnimatedTextComponentModule } from '../components/animated-text/animated-text.module';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  {
    path: '',
    component: TransferPage
  }
];
import { SwalService } from '../services/swal/swal.service';
import { BookService } from '../services/book/book.service';
import { UserService } from '../services/user/user.service';

describe('TransferPage', () => {
  let component: TransferPage;
  let fixture: ComponentFixture<TransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MenuTitleComponentModule,
        MatStepperModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        QRCodeModule,
        AnimatedTextComponentModule,
        MatTableModule
      ],
      declarations: [TransferPage, ItemTransferComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [BarcodeScanner, SwalService, BookService, UserService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
