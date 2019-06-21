import { Component, OnInit } from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { FileUploadService } from 'src/app/services/file-upload/file-upload.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {
  // Main task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  // State for disable the file drop
  isDropped = false;

  constructor(private uploader: FileUploadService) {}
  ngOnInit(): void {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    this.isDropped = true;
    // The File object
    const file = event.item(0);
    this.uploader.uploadFile(file, this.setDownloadbaleURL, this.setTask);
  }
  setTask = (task: AngularFireUploadTask) => {
    this.snapshot = task.snapshotChanges();
    this.percentage = task.percentageChanges();
  };

  setDownloadbaleURL = url => {
    this.downloadURL = url;
  };
}
