import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEntryDecoratorComponent } from './blog-entry-decorator.component';

describe('BlogEntryDecoratorComponent', () => {
  let component: BlogEntryDecoratorComponent;
  let fixture: ComponentFixture<BlogEntryDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogEntryDecoratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEntryDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
