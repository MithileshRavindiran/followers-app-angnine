import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FollowersComponent } from './followers/followers.component';
import { HomeComponent } from './home/home.component';
import { AppExceptionHandler } from './common/exceptions/app.exception.handler';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FollowersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide:ErrorHandler, useClass:AppExceptionHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
