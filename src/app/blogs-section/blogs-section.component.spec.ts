import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsContainerComponent } from './blogs-section.component';
import { BlogService } from '../blog.service';

describe('BlogsContainerComponent', () => {
  let component: BlogsContainerComponent;
  let fixture: ComponentFixture<BlogsContainerComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('BlogService', ['getBlogEntries']);

    TestBed.configureTestingModule({
      declarations: [ BlogsContainerComponent ],
      providers: [
        BlogsContainerComponent,
        {provide: BlogService, useValue: spy}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
