import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDetailsComponent } from './post-details/post-details.component';

import { SignupComponent } from './signup/signup.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

const routes: Routes = [

  { path: '', component: SignupComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },

  { path: 'posts-details', component: PostDetailsComponent },


  // { path: 'signup', loadChildren:() => import('./../app/signup/signup.component').then(m => m.SignupComponent) },


  { path: 'posts', component: PostComponent, canActivate: [AuthService] },
  {
    path: 'posts-details',
    component: PostDetailsComponent,
    canActivate: [AuthService],
  },
  {path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
