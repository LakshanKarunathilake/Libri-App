<p align="center">
  <img width="460" " src="https://firebasestorage.googleapis.com/v0/b/libri-238805.appspot.com/o/libri%20logo.png?alt=media&token=bec48934-d1c2-467f-b6d3-af1538aecaeb" />
</p>

# Remote Library Assistant

![](https://img.shields.io/github/issues/LakshanKarunathilake/Libri-App)
![](https://img.shields.io/github/forks/LakshanKarunathilake/Libri-App)
![](https://img.shields.io/github/stars/LakshanKarunathilake/Libri-App) ![](https://img.shields.io/github/license/LakshanKarunathilake/Libri-App)
![](https://img.shields.io/github/repo-size/lakshankarunathilake/Libri-App)

## Technologies

<p align="center" > 
<img width="150" " src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ionic-logo-landscape.svg/1200px-Ionic-logo-landscape.svg.png" />
  <img width="100" " src="https://angular.io/assets/images/logos/angular/angular.png" />
    <img width="150" " src="https://raw.githubusercontent.com/t4t5/sweetalert/e3c2085473a0eb5a6b022e43eb22e746380bb955/assets/logotype.png" />
	<img width="80" " src="https://icon-library.net/images/stripe-icon/stripe-icon-3.jpg" />
<img width="80" " src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png" />

</p>

## Features

- Cross platform mobile abbpplication based on Ionic Version 4.0
- Associated with a supportive dashboard called Libri-Admin
- All your library users can use the the library applications remotely
- New transfer capability between users without visiting the library
- Checking the books and the availability of books can be checked without visiting the library
- Users can transfer books without visiting the library
- Users can pay the penalties if the library authorized personal grant the permission
- Users will be able to receive the notices digitally and efficiently
- Any library have existing system can plug this application if the current system is based on Koha Library Management System or Ever green library system
- Library staff can embed a brief introduction about the statistics of the library

## System sub components

Aparat from the mobile application the application support a custom build dashboard called [Dashboard][dashboard] and a backend server with server deployed according to the serverless architecture called [Server][server]

### Installation Guide

** Pre-requisits**

| Tool           | Version                          |
| -------------- | -------------------------------- |
| Node           | 10.11 LTS                        |
| Ionic CLI      | 5.4.4                            |
| Android Studio | 3.5.1                            |
| Android SDK    | \*preffered users device version |
| npm            | 6.4.1                            |

#### 1. Install Dependencies

```sh
$ npm install
```

#### 2. Start Application

```sh
$ npm start
```

This will launch an application preview inside your preffered browser

#### 3. Run test cases

```sh
$ npm test
```

This will run the basic test cases enabled for your sample application. You have to write your own test cases when you implement new features or update the existing features

#### App Installation

To build the apk file from the Ionic source code, **Capacitor** is being used. Using capacitor you can deploy this application to

- Android
- iOS
- Desktop ( electron )
- Progressive Web APP

The source code contains the implmentation for Android and PWA implmentations. You can easily build the app in xCode for iOS builds.

#### 1. Android Build

To build the application using Capacitor and Android studio follow the below commands.

```sh
$ ionic capacitor add android
$ ionic cordova prepare android
$ ionic cordova open android
```

After these commands you can see your application is getting opened on the Android Studio. Then you can build your application as a normal Android application.

For further information please refer for the official android build guide for capacitor. ``https://ionicframework.com/docs/building/android

[dashboard]: https://github.com/LakshanKarunathilake/libri-admin '**Libri-Dashbord**'
[server]: https://github.com/LakshanKarunathilake/Libri-server '**Libri-server**.'

#### Replacing firebase configurations

You can find the firebase configurations in the directory src/environments/environment.prod.ts for production builds or else src/environments/environment.ts

Before replacing the firebase configurations you have to make sure you have created a project using firebase console and enabled the features

- Firebase Cloud Messaging
- Firebase Cloud Functions
- Firebase Anlaytics for Web
- Firebase Crashlytics
- Firebase Performance
- Firebase Storage bucket

The above features must be enabled prior to the installation. The sample configuration file will be as below.

```javascript
	 firebase: {
		apiKey: 'TEST _KEY',
		authDomain: 'TEST _KEY',
		databaseURL: 'TEST _KEY',
		projectId: 'TEST _KEY',
		storageBucket: 'TEST _KEY',
		messagingSenderId: 'TEST _KEY',
		appId: 'TEST _KEY',
		measurementId: 'TEST _KEY'
  }
```
