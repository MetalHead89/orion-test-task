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
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticationEffects } from './reducers/authentication/authentication.effects';
import { HeadOrganizationEffects } from './reducers/head-organization/head-organization.effects';
import { BranchEffects } from './reducers/branch/branch.effects';
import { OrganizationCardComponent } from './organization-card/organization-card.component';
import { AddOrganizationComponent } from './add-organization/add-organization.component';
import { OrganizationCardEffects } from './reducers/organization-card/organization-card.effects';
import { AddOrganizationEffects } from './reducers/add-organization/add-organization.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationPanelComponent,
    MainComponent,
    HomeComponent,
    NotAuthenticatedComponent,
    LogInComponent,
    OrganizationCardComponent,
    AddOrganizationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([
      AuthenticationEffects,
      HeadOrganizationEffects,
      BranchEffects,
      OrganizationCardEffects,
      AddOrganizationEffects
    ]),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
