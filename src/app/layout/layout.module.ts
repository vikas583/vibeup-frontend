import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from "./header-footer/footer/footer.component";
import { HeaderComponent } from "./header-footer/header/header.component";
import {InterceptorAuthService} from './interceptor-service/interceptor-auth.service';

import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from "./services/user.service";

@NgModule({
	declarations: [
		LayoutComponent,
		HeaderComponent,
		FooterComponent,
	],
	imports: [
		CommonModule,
		LayoutRoutingModule
	],
	providers: [InterceptorAuthService,UserService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorAuthService, multi: true}],
})
export class LayoutModule { }
