import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(
    private http: HttpClient
    ) {}

  getBlogEntries(): Observable<object> {
    return this.http.get('/assets/blog-entries.json');
  }
}
