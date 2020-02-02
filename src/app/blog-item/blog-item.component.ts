import { BlogItem } from './../models/blog-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.sass']
})
export class BlogItemComponent implements OnInit {
  @Input() blogItem: BlogItem;

  constructor() { }

  ngOnInit() {
  }

}
