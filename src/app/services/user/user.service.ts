import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
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

  /**
   * Update the
   */
  updateUserDetails = async (displayName, phoneNumber) => {
    console.log('updating user details', phoneNumber, displayName);
    const { uid, emailVerified, email, updateProfile } = this.afa.auth.currentUser;
    // Updating the display name in the auth
    auth().currentUser.updateProfile({ displayName, photoURL: '' });
    // Updating the details in the firestore document
    this.afs
      .collection('users')
      .doc(uid)
      .set({ phoneNumber, displayName, uid, emailVerified, email });
  };

  getCurrentUser = () => {
    return this.afa.auth.currentUser;
  };
}
