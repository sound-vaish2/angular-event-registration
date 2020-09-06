import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './nav-bar/home/home.component';
import { RegistrationComponent } from './nav-bar/registration/registration.component';
import { DetailsComponent } from './nav-bar/details/details.component';
import { FooterComponent } from './footer/footer.component';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import {NgxPrintModule} from 'ngx-print';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    DetailsComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
