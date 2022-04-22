import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotAuthenticatedComponent } from './not-authenticated/not-authenticated.component';
import { LogInComponent } from './log-in/log-in.component';
import { AddOrganizationComponent } from './add-organization/add-organization.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'not-authenticated', component: NotAuthenticatedComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'add-organization', component: AddOrganizationComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
