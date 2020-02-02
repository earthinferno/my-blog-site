import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-aside',
  templateUrl: './blog-aside.component.html',
  styleUrls: ['./blog-aside.component.sass']
})
export class BlogAsideComponent implements OnInit {
  blogs: Observable<object>;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogs = this.blogService.getBlogEntries();
  }

}
