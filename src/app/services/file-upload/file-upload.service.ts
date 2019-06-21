import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { tap, finalize } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  // downloadble image url and size db
  private fileData = { imageURL: '', size: 0 };

  constructor(private afs: AngularFireStorage, private afd: AngularFirestore) {}

  uploadFile = (file: File, setDownloadURL: Function, setTask: Function) => {
    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }

    // The storage path
    const path = `request_images/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };
    const task = this.afs.upload(path, file, { customMetadata });

    setTask(task);

    const snapshot = task.snapshotChanges();

    // The file's download URL
    snapshot
      .pipe(
        tap(async snap => {
          if (snap.bytesTransferred === snap.totalBytes) {
            this.fileData.size = snap.totalBytes;
          }
        }),
        finalize(async () => {
          this.fileData.imageURL = await this.afs
            .ref(path)
            .getDownloadURL()
            .toPromise();
          setDownloadURL(this.afs.ref(path).getDownloadURL());
        })
      )
      .subscribe();
  };

  getFileDate = () => {
    return this.fileData;
  };
}
