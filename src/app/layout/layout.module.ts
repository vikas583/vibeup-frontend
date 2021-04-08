import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from "./header-footer/footer/footer.component";
import { HeaderComponent } from "./header-footer/header/header.component";

@NgModule({
	declarations: [
		LayoutComponent,
		HeaderComponent,
		FooterComponent,
	],
	imports: [
		CommonModule,
		LayoutRoutingModule
	]
})
export class LayoutModule { }
