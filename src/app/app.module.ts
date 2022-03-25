import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostDetailsComponent } from './post-details/post-details.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,

    PostDetailsComponent,


    FooterComponent,


    SignupComponent,

    HeaderComponent,
    SignupComponent,
    PostComponent,
    LoginComponent,
    PageNotFoundComponent,




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
