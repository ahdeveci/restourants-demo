import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {SharedComponentsModule} from "../shared-components/shared-components.module";
import {HttpClientModule} from "@angular/common/http";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {FormsModule} from "@angular/forms";
import {FilterPipeModule} from "ngx-filter-pipe";



@NgModule({
	declarations: [
		MainPageComponent
	],
	exports: [
		MainPageComponent
	],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedComponentsModule,
    InfiniteScrollModule,
    FormsModule,
    FilterPipeModule
  ]
})
export class MainPageModule { }
