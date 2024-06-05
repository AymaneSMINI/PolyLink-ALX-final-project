import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { VerificationComponent } from './verification/verification.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RouteComponent } from './route/route.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AccountComponent } from './account/account.component';
import { InformationComponent } from './information/information.component';
import { LinksComponent } from './links/links.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { TemplatesComponent } from './templates/templates.component';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: 'information', component: InformationComponent },
      { path: 'links', component: LinksComponent },
      { path: 'change-password', component: ChangepasswordComponent },
      { path: 'themes', component: TemplatesComponent },
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'verification', component: VerificationComponent },
  { path: 'add-route', component: RouteComponent },
  { path: '', component: HomeComponent },
  { path: 'polylink/:username', component: LandingpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
