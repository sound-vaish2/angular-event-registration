import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './nav-bar/home/home.component';
import { RegistrationComponent } from './nav-bar/registration/registration.component';
import { DetailsComponent } from './nav-bar/details/details.component';
import { FooterComponent } from './footer/footer.component';
import { FormGroup, FormControl, Validators} from '@angular/forms' //<= Validators
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; // <== add the imports!, for forms
import {NgxPrintModule} from 'ngx-print'; //for print command
@NgModule({
  //declaration are where component are declare
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    DetailsComponent,
    FooterComponent,

  ],
  //imports => modules are declared here
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule,
    NgxPrintModule
  ],
  //providers => services are declare here
  providers: [],
  //in bootstrap the main component is declared
  bootstrap: [AppComponent]
})
export class AppModule { }
