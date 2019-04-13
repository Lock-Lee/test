import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgxGaugeModule } from 'ngx-gauge';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import {
  AngularFireDatabaseModule,
  AngularFireDatabase
} from "@angular/fire/database";
export const firebaseConfig = {
  apiKey: "AIzaSyDAumgrN9B_JTgifEGkMt2pYPy9XHQhN-M",
    authDomain: "smartfram-2ce00.firebaseapp.com",
    databaseURL: "https://smartfram-2ce00.firebaseio.com",
    projectId: "smartfram-2ce00",
    storageBucket: "smartfram-2ce00.appspot.com",
    messagingSenderId: "784946501466"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig), AngularFireDatabaseModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgxGaugeModule],
  providers: [
    StatusBar, AngularFireDatabase,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
