import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemComponent } from './blog-item.component';

describe('BlogItemComponent', () => {
  let component: BlogItemComponent;
  let fixture: ComponentFixture<BlogItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlogItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogItemComponent);
    component = fixture.componentInstance;

    component.blogItem = {
      id: 'i23',
      title: 'mockBlogItem',
      category: 'mockCategory',
      content: [{ type: 'p', value: 'mock text' }],
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
