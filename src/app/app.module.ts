import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material 2
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ContentComponent } from './content/content.component';
import { DisplayComponent } from './dashboard/display/display.component';
import { ControlsComponent } from './dashboard/controls/controls.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MdDialogComponent } from './md-dialog/md-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    DisplayComponent,
    ControlsComponent,
    DashboardComponent,
    MdDialogComponent
  ],
  entryComponents: [
    MdDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
