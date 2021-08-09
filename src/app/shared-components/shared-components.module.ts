import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestourantComponent } from './restourant/restourant.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PipesModule} from "../pipes/pipes.module";



@NgModule({
	declarations: [
		RestourantComponent
	],
  exports: [
    RestourantComponent
  ],
	imports: [
		CommonModule,
		ReactiveFormsModule,
    PipesModule
	]
})
export class SharedComponentsModule { }
