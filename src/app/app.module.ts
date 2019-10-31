import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule }   from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GrandPaComponent } from './grand-pa/grand-pa.component';
import { FatherComponent } from './grand-pa/father/father.component';
import { SonComponent } from './grand-pa/father/son/son.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    GrandPaComponent,
    FatherComponent,
    SonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
