import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule}  from'@angular/common/http';
import { NewsApiService } from './service/news-api.service';
import { newsComponent } from './news/news.component';
import { EverythingNewsComponent } from './everything-news/everything-news.component';


@NgModule({
  declarations: [
    AppComponent,
    newsComponent,
    EverythingNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
