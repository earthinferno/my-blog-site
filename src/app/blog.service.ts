import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(
    private http: HttpClient
    ) {}

  getBlogEntries() {
    return this.http.get('/assets/blog-entries.json');
  }
}
