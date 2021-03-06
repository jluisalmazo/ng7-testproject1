import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UserAlbumsComponent } from './user-albums/user-albums.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    UserDetailComponent,
    UserPostsComponent,
    UserAlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
