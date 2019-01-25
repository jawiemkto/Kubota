import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CanvasComponent } from './canvas/canvas.component';
import { LogosComponent } from './logos/logos.component';
import { CustomizationComponent } from './customization/customization.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CanvasComponent,
    LogosComponent,
    CustomizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
