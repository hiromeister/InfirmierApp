import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { AddPatientPage } from '../pages/add-patient/add-patient';
import { ProfilePage } from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SecurityCodePage } from '../pages/security-code/security-code';


import {HttpModule} from '@angular/http';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    AddPatientPage,
    ProfilePage,
    SecurityCodePage
    
],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    AddPatientPage,
    ProfilePage,
    SecurityCodePage
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
