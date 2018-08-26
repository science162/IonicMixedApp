import { GoogleMaps,GoogleMap,GoogleMapOptions,GoogleMapsEvent} from '@ionic-native/google-maps';
import { TabsPage } from './../pages/tabs/tabs';
import { StoragePage } from './../pages/storage/storage';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { NewsApiServices } from '../services/newapi.service';
import { NativeStoragePage } from '../pages/native-storage/native-storage';
import { HttpModule } from '@angular/http/';
import { NativeStorage } from '@ionic-native/native-storage';
import { SQLite} from '@ionic-native/sqlite';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NativeStoragePage,
    DetailsPage,
    StoragePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    NativeStoragePage,
    StoragePage,
    TabsPage
  ],
  providers: [
    NewsApiServices,
    StatusBar,
    SplashScreen,
    NativeStorage,
    SQLite,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
