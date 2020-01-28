import { Component, OnInit } from '@angular/core';

import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blogs-section',
  templateUrl: './blogs-section.component.html',
  styleUrls: ['./blogs-section.component.sass']
})
export class BlogsContainerComponent implements OnInit {
  blogs;

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.blogs = this.blogService.getBlogEntries();
  }

}
