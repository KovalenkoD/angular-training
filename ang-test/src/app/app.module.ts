import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {BaseComponentService} from "./services/base.component.service";
import {FooterComponent} from "./components/footer/footer.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "./components/home/home.component";
import {SomePipe} from "./pipes/some.pipe";
import {PersonListComponent} from "./components/person-list/person.list.component";
import {PersonEditComponent} from "./components/person-edit/person.edit.component";
import {PersonService} from "./services/person.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PersonListComponent,
    PersonEditComponent,
    SomePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    BaseComponentService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
