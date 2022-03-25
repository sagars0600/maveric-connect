import { PostDetailsComponent } from './post-details/post-details.component';

import { SignupComponent } from './signup/signup.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

const routes: Routes = [
  // { path: 'signup', loadChildren:() => import('./../app/signup/signup.component').then(m => m.SignupComponent) },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostComponent, canActivate: [AuthService] },
  {
    path: 'posts-details',
    component: PostDetailsComponent,
    canActivate: [AuthService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
