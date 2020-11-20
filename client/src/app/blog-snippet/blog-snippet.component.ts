import { Component, Input, OnInit } from '@angular/core';

import { BlogItem } from './../models/blog-item';

@Component({
  selector: 'app-blog-snippet',
  templateUrl: './blog-snippet.component.html',
  styleUrls: ['./blog-snippet.component.sass'],
})
export class BlogSnippetComponent implements OnInit {
  @Input() blogItem: BlogItem;

  constructor() {}

  ngOnInit() {}
}
