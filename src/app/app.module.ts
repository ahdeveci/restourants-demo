import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MainPageModule} from "./main-page/main-page.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HeaderInterceptor} from "./interceptor/token.interceptor";
import {FilterPipeModule} from "ngx-filter-pipe";

@NgModule({
  declarations: [
    AppComponent
  ],
	imports: [
		BrowserModule,
		MainPageModule,
    FilterPipeModule
	],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
