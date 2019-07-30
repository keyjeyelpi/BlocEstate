import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { EditProfilePageModule } from './pages/profile/edit-profile/edit-profile.module';
import { EditFilterPageModule } from './pages/home/edit-filter/edit-filter.module';

import { PropertyDetailsPageModule } from './pages/property-details/property-details.module';
import { RecentLikesPageModule } from './pages/saved/for-sale/recent-likes/recent-likes.module';
import { FavoritesPageModule } from './pages/saved/for-sale/favorites/favorites.module';

import { Globals } from './classes/globals';
import { SignupPageModule } from './pages/signup/signup.module';
import { SigninPageModule } from './pages/signin/signin.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    EditProfilePageModule,
    EditFilterPageModule,
    PropertyDetailsPageModule,
    RecentLikesPageModule,
    FavoritesPageModule,
    SignupPageModule,
    SigninPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
