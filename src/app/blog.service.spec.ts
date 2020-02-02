import { TestBed } from '@angular/core/testing';

import { BlogService } from './blog.service';
import { HttpClient } from '@angular/common/http';

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
