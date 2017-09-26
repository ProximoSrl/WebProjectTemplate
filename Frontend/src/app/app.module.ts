import { NgModule } from '@angular/core';
import { MaterialComponentsModule } from './material.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { SearchResultListComponent } from './search-result-list/search-result-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    MaterialComponentsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
