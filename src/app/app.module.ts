import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { LaunchCardComponent } from './launch-card/launch-card.component';
import { AppRoutingModule } from './app-routing.module';

import { FrameAComponent, FrameBComponent } from './frames.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    LaunchCardComponent,
    FrameAComponent,
    FrameBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
