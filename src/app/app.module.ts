import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from "./authguard/auth.guard";
import { CommonService } from "./common-services/common.service";
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	BrowserAnimationsModule,
	ToastrModule.forRoot(), 
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
