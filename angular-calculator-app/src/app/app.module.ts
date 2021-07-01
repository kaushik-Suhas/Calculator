import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { DisplayButtonComponent } from './display-button/display-button.component';
import { ButtonElementsComponent } from './display-button/button-elements/button-elements.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    DisplayButtonComponent,
    ButtonElementsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
