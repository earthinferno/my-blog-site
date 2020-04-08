import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from './../blog.service';
import { BlogItem } from './../models/blog-item';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.sass'],
})
export class BlogItemComponent implements OnInit {
  blogItem: BlogItem;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.blogService
        .getFilteredBlogEntries(params.get('blogId'))
        .subscribe((blog) => (this.blogItem = blog[0]));
    });
  }
}
