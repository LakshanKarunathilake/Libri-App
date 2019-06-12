import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { SwalService } from '../services/swal/swal.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss']
})
export class TransferPage implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  options = ['new feature', 'error/bug', 'improvement'];
  constructor(
    private _formBuilder: FormBuilder,
    private scanner: BarcodeScanner,
    private swal: SwalService
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  getTitle = () => {
    return this.firstFormGroup.controls['firstCtrl'].value || 'Value not found';
  };

  scanForQR = () => {
    this.scanner
      .scan()
      .then(data => {
        alert(data.text);
      })
      .catch(error => {
        console.log('error occured while scanning QR', error);
        this.swal.viewErrorMessage(
          'Error',
          'You have to be on your iOS or android version inorder to access this service'
        );
      });
  };
}
