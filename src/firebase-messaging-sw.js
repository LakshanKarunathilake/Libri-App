// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: 'AIzaSyDuPVBd60jVbPw1BRefZsTkWb2AXZsfzNk',
  authDomain: 'libri-238805.firebaseapp.com',
  databaseURL: 'https://libri-238805.firebaseio.com',
  projectId: 'libri-238805',
  storageBucket: 'libri-238805.appspot.com',
  messagingSenderId: '696789073783',
  appId: '1:696789073783:web:3579e974bc60674c',
  measurementId: 'G-D5R7Q086CT'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
