import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CanvasComponent } from './canvas/canvas.component';
import { LogosComponent } from './logos/logos.component';
import { LogoComponent } from './logos/logo/logo.component';
import { MaterialModule } from './material/material.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CanvasComponent,
    LogosComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ColorPickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
