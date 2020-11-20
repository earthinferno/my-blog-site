import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { BlogService } from './blog.service';

describe('BlogService', () => {
  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        BlogService,
        {provide: HttpClient, useValue: spy}
      ]
    });
  });


  it('should be created', () => {
    const service: BlogService = TestBed.get(BlogService);
    expect(service).toBeTruthy();
  });
});
