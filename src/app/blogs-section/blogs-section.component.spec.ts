import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsContainerComponent } from './blogs-section.component';

describe('BlogsContainerComponent', () => {
  let component: BlogsContainerComponent;
  let fixture: ComponentFixture<BlogsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsContainerComponent ]
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
