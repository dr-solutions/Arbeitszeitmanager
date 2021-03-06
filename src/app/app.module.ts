import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NgCalendarModule  } from 'ionic2-calendar';
import { EreignisModalPageModule } from '../pages/ereignis-modal/ereignis-modal.module';

import { registerLocaleData } from '@angular/common';
import localeDEAT from '@angular/common/locales/de-AT';
import { MonatsanzeigePageModule } from '../pages/monatsanzeige/monatsanzeige.module';
registerLocaleData(localeDEAT);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    EreignisModalPageModule,
    MonatsanzeigePageModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: LOCALE_ID, useValue: 'de-AT' }
  ]
})
export class AppModule {}
