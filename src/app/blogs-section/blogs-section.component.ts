import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blogs-section',
  templateUrl: './blogs-section.component.html',
  styleUrls: ['./blogs-section.component.sass'],
})
export class BlogsContainerComponent implements OnInit {
  blogs;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.get('blogId')) {
        this.blogs = this.blogService.getFilteredBlogEntries(
          params.get('blogId')
        );
      } else {
        this.blogs = this.blogService.getBlogEntries();
      }
    });
  }
}
