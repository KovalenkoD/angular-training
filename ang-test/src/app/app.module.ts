import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {BaseComponentService} from "./services/base.component.service";
import {FooterComponent} from "./components/footer/footer.component";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./components/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    BaseComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
