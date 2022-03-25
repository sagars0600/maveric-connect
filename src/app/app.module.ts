import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { PostDetailsComponent } from './post-details/post-details.component';

import { FooterComponent } from './footer/footer.component';

import { SignupComponent } from './signup/signup.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,

    PostDetailsComponent,


    FooterComponent,


    SignupComponent,

    HeaderComponent,
    SignupComponent,
    PostComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
