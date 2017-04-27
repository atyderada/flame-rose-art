import { MainWindowComponent } from 'app/main-window/main-window.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { environment } from "environments/environment";
import { TopBarComponent } from "app/-bars/top-bar/top-bar.component";
import { BottomBarComponent } from "app/-bars/bottom-bar/bottom-bar.component";
import { DirectoryComponent } from "app/-navigation/directory/directory.component";
import { ProfileComponent } from "app/-main-content/profile/profile.component";
import { LeftBurgerComponent } from "app/-navigation/left-burger/left-burger.component";
import { ProfileFabComponent } from "app/-navigation/profile-fab/profile-fab.component";
import { LandingScreenComponent } from "app/-main-content/landing-screen/landing-screen.component";
import { SculpturesComponent } from "app/-main-content/sculptures/sculptures.component";
import { HallCompComponent } from "app/-main-content/hall-comp/hall-comp.component";
import { SculptureCardComponent } from "app/-main-content/sculptures/sculpture-card/sculpture-card.component";
import { HallDirectoryOptionComponent } from "app/-navigation/directory/hall-directory-option/hall-directory-option.component";
import { SculptureCompComponent } from "app/-main-content/sculpture-comp/sculpture-comp.component";
import { DirectoryOptionComponent } from "app/-navigation/directory/directory-option/directory-option.component";
import { ProfileFeedComponent } from "app/-main-content/profile/profile-feed/profile-feed.component";
import { PhotoCardComponent } from './photo-card/photo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BottomBarComponent,
    MainWindowComponent,
    DirectoryComponent,
    ProfileComponent,
    LeftBurgerComponent,
    ProfileFabComponent,
    LandingScreenComponent,
    ProfileFeedComponent,
    SculpturesComponent,
    HallCompComponent,
    SculptureCardComponent,
    SculptureCompComponent,
    HallDirectoryOptionComponent,
    DirectoryOptionComponent,
    PhotoCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
