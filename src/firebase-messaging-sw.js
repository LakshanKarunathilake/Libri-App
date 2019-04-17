importScripts('https://www.gstatic.com/firebasejs/5.4.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.4.2/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyD2ubSfF7xjL6cVKzO038c18MSf_dY1knU',
  authDomain: 'libri-9746e.firebaseapp.com',
  databaseURL: 'https://libri-9746e.firebaseio.com',
  projectId: 'libri-9746e',
  storageBucket: 'libri-9746e.appspot.com',
  messagingSenderId: '893322827741'
});

const messaging = firebase.messaging();
