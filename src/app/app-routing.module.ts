import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogItemComponent } from './blog-item/blog-item.component';
import { BlogsMainComponent } from './blog-main/blogs-main.component';

const routes: Routes = [
  { path: '', component: BlogsMainComponent },
  { path: 'blogs', component: BlogsMainComponent },
  { path: 'blogs/:blogId', component: BlogItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
