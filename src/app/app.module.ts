import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BannerComponent } from './banner/banner.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { BlogsContainerComponent } from './blogs-section/blogs-section.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogAsideComponent } from './blog-aside/blog-aside.component';
import { BlogMainComponent } from './blog-main/blog-main.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BannerComponent,
    BlogItemComponent,
    BlogsContainerComponent,
    BlogAsideComponent,
    BlogMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
