
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, AlertController } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { GooglemapPage } from '../pages/googlemap/googlemap';

import { Facebook } from "@ionic-native/facebook";
import { GooglePlus } from '@ionic-native/google-plus';

import { GoogleMaps } from '@ionic-native/google-maps';
import { NearbyplaceProvider } from '../providers/nearbyplace/nearbyplace';
import { HttpClientModule } from "@angular/common/http";



export const firebaseConfig = {
  apiKey: "AIzaSyBpJloDN5Ot1_kvMZIDYgj-eJiWuD0NRpA",
    authDomain: "student-location.firebaseapp.com",
    databaseURL: "https://student-location.firebaseio.com",
    projectId: "student-location",
    storageBucket: "student-location.appspot.com",
    messagingSenderId: "955299915732"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    GooglemapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    GooglemapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AngularFireAuth,
    AuthProvider,
    Facebook,
    GooglePlus,
    GoogleMaps,
    NearbyplaceProvider,
    AlertController
  ]
})
export class AppModule { }
