import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OldComponentComponent } from './old/old-component/old-component.component';
import { StandaloneComponent } from './standalone/standalone/standalone.component';

@NgModule({
  declarations: [
    AppComponent,
    OldComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StandaloneComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
