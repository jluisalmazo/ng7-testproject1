import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UserAlbumsComponent } from './user-albums/user-albums.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'userDetail/:id', component: UserDetailComponent },
  { path: 'userPosts/:id/:username', component: UserPostsComponent },
  { path: 'userAlbums/:id/:username', component: UserAlbumsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
