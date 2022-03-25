
import { PostDetailsComponent } from './post-details/post-details.component';

import { SignupComponent } from './signup/signup.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {path:"posts-details",component:PostDetailsComponent}



  {path:"signup",component:SignupComponent}

  {path: '', component:SignupComponent},
  {path:'posts' , component:PostComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
