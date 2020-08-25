import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { BlogAsideComponent } from './blog-aside/blog-aside.component';
import { BlogEntryDecoratorComponent } from './blog-entry-decorator/blog-entry-decorator.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { BlogsMainComponent } from './blog-main/blogs-main.component';
import { BlogSnippetComponent } from './blog-snippet/blog-snippet.component';
import { BlogsContainerComponent } from './blogs-section/blogs-section.component';
import { HomeComponent } from './home/home.component';
import { JoinStringsPipe } from './join-strings.pipe';
import { ProfilePageModule } from './profile-page/profile-page.module';
import { SafeHtmlPipe } from './sanitize-html.pipe';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BannerComponent,
    BlogItemComponent,
    BlogsContainerComponent,
    BlogAsideComponent,
    BlogsMainComponent,
    BlogSnippetComponent,
    BlogEntryDecoratorComponent,
    HomeComponent,
    SafeHtmlPipe,
    JoinStringsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProfilePageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SafeHtmlPipe, JoinStringsPipe],
})
export class AppModule {}
