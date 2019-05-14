import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private afa: AngularFireAuth, private afs: AngularFirestore) {}

  createUser = (userEmail: string, password: string) => {
    return this.afa.auth.createUserWithEmailAndPassword(userEmail, password);
  };

  sendEmailConfirmation = () => {
    return auth().currentUser.sendEmailVerification();
  };

  updateUserDetails = async (phoneNumber, displayName) => {
    console.log('updating user details', phoneNumber, displayName);
    const { uid, emailVerified, email } = this.afa.auth.currentUser;
    this.afs
      .collection('users')
      .doc(uid)
      .set({ phoneNumber, displayName, uid, emailVerified, email });
  };
}
