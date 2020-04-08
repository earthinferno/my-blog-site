import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BlogItem } from './models/blog-item';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getBlogEntry(id: string): BlogItem[] {
    let blogEntries: BlogItem[] = [];
    this.http
      .get<BlogItem[]>('/assets/blog-entries.json')
      .subscribe((entries) => (blogEntries = entries));

    return blogEntries.filter((x) => x.id === id);
  }

  getFilteredBlogEntries(id: string): Observable<BlogItem[]> {
    return this.http
      .get<BlogItem[]>('/assets/blog-entries.json')
      .pipe(map((blogs) => blogs.filter((blog) => blog.id === id)));
  }

  getBlogEntries(): Observable<BlogItem[]> {
    return this.http.get<BlogItem[]>('/assets/blog-entries.json');
  }
}
