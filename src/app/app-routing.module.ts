import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogEntryDecoratorComponent } from './blog-entry-decorator/blog-entry-decorator.component';
import { BlogsMainComponent } from './blog-main/blogs-main.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blogs', component: BlogsMainComponent },
  { path: 'blogs/:blogId', component: BlogEntryDecoratorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
