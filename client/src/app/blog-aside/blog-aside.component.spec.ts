import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAsideComponent } from './blog-aside.component';
import { BlogService } from '../blog.service';

describe('BlogAsideComponent', () => {
  let component: BlogAsideComponent;
  let fixture: ComponentFixture<BlogAsideComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('BlogService', ['getBlogEntries']);

    TestBed.configureTestingModule({
      declarations: [ BlogAsideComponent ],
      providers: [
        BlogAsideComponent,
        {provide: BlogService, useValue: spy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
