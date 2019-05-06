import { SwalService } from './../services/swal/swal.service';
import { Feedback } from './../models/feedback';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss']
})
export class FeedbackPage implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  options = ['new feature', 'error/bug', 'improvement'];
  constructor(
    private _formBuilder: FormBuilder,
    private afs: AngularFirestore,
    private loadingCtrl: LoadingController,
    private swal: SwalService
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  submitFeedback = async () => {
    const loading = await this.loadingCtrl.create({
      message: 'Sending your feedback',
      spinner: 'crescent'
    });
    loading.present();
    const feedback: Feedback = {
      creationDate: new Date(),
      type: this.firstFormGroup.controls['firstCtrl'].value,
      message: this.secondFormGroup.controls['firstCtrl'].value
    };
    this.afs
      .collection('Feedback')
      .add({ ...feedback })
      .then(() => {
        this.swal.viewSuccessMessage('Successful', 'Feedback submitted!');
      })
      .catch(error => {
        console.error('Error occured when sending the feedback', error);
        this.swal.viewErrorMessage('Error', 'Error occurred while sending feedback!');
      })
      .finally(() => {
        loading.dismiss();
      });
  };
}
