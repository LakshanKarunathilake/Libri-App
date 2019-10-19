import { NgModule } from '@angular/core';
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

@NgModule({
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
  providers: [BarcodeScanner],
  entryComponents: [ItemTransferComponent]
})
export class TransferPageModule {}
