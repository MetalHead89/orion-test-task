import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticationPanelComponent } from './header/authentication-panel/authentication-panel.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { NotAuthenticatedComponent } from './not-authenticated/not-authenticated.component';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationPanelComponent,
    MainComponent,
    HomeComponent,
    NotAuthenticatedComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
