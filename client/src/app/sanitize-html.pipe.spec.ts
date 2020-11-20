import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

import { SafeHtmlPipe } from './sanitize-html.pipe';

describe('SanitizeHtmlPipe', () => {
  beforeEach(() => {
    const spy = jasmine.createSpyObj('DomSanitizer', ['get']);

    TestBed.configureTestingModule({
      providers: [SafeHtmlPipe, { provide: DomSanitizer, useValue: spy }],
    });
  });

  it('create an instance', () => {
    const pipe: SafeHtmlPipe = TestBed.get(SafeHtmlPipe);
    expect(pipe).toBeTruthy();
  });
});
