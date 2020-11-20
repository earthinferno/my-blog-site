import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { BlogService } from '../blog.service';
import { BlogItem } from './../models/blog-item';

@Component({
  selector: 'app-blog-aside',
  templateUrl: './blog-aside.component.html',
  styleUrls: ['./blog-aside.component.scss'],
})
export class BlogAsideComponent implements OnInit {
  blogs: Observable<BlogItem[]>;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogs = this.blogService.getBlogEntries();
  }
}
