import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatTableModule} from '@angular/material/table';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { VerificationComponent } from './verification/verification.component';
import { CodeInputModule } from 'angular-code-input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteComponent } from './route/route.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CookieService } from 'ngx-cookie-service';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { AccountComponent } from './account/account.component';
import { InformationComponent } from './information/information.component';
import { LinksComponent } from './links/links.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { TemplatesComponent } from './templates/templates.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    VerificationComponent,
    DashboardComponent,
    RouteComponent,
    NavbarComponent,
    HomeComponent,
    LandingpageComponent,
    NavbarAdminComponent,
    AccountComponent,
    InformationComponent,
    LinksComponent,
    ChangepasswordComponent,
    TemplatesComponent
  ],
  imports: [
    CodeInputModule.forRoot({
      codeLength: 6,
      isCharsCode: true,
      code: ''
    }),
    HttpClientModule,
    MatDividerModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
