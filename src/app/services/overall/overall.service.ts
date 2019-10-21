import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Topic } from 'src/app/models/Topic';

@Injectable({
  providedIn: 'root'
})
export class OverallService {
  constructor(private afs: AngularFirestore) {}

  /**
   * Return an Observable of topics
   * Method will query firebase documents created by the Library Admin and query for the notice topics
   */
  getNoticeTopics = () => {
    return this.afs
      .collection('admin')
      .doc('notices')
      .collection<Topic>('topics')
      .valueChanges();
  };
}
