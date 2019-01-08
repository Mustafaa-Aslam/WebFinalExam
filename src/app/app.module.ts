import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegisterPage } from '../pages/register/register';
import { AddReminderPage } from '../pages/add-reminder/add-reminder';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from '@angular/fire';
import { initializeApp } from 'firebase';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';
import {Camera} from '@ionic-native/camera';
import { LocalNotifications } from '@ionic-native/local-notifications';


var config = {
  apiKey: "AIzaSyCe5eqphIgB5KNNBYeljXw54eMxrVmrLbo",
  authDomain: "medicineapp-e3d09.firebaseapp.com",
  databaseURL: "https://medicineapp-e3d09.firebaseio.com",
  projectId: "medicineapp-e3d09",
  storageBucket: "",
  messagingSenderId: "524375086851"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    AddReminderPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    AddReminderPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
