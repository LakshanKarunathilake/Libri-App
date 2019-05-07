importScripts('https://www.gstatic.com/firebasejs/5.4.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.4.2/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyDuPVBd60jVbPw1BRefZsTkWb2AXZsfzNk',
  authDomain: 'libri-238805.firebaseapp.com',
  databaseURL: 'https://libri-238805.firebaseio.com',
  projectId: 'libri-238805',
  storageBucket: 'libri-238805.appspot.com',
  messagingSenderId: '696789073783',
  appId: '1:696789073783:web:3579e974bc60674c'
});

const messaging = firebase.messaging();
