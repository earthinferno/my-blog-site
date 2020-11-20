import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  arrowStyle: string;
  hiddenContentStyle: string;
  expanded: boolean;

  constructor() {
    this.arrowStyle = 'arrow arrow-up';
    this.hiddenContentStyle = 'hidden-content hidden-content-hide';
  }

  ngOnInit() {}

  expand() {
    if (this.expanded) {
      this.arrowStyle = 'arrow arrow-up';
      this.hiddenContentStyle = 'hidden-content hidden-content-hide';
      this.expanded = false;
      return;
    }
    this.arrowStyle = 'arrow arrow-down';
    this.hiddenContentStyle = 'hidden-content hidden-content-show';
    this.expanded = true;
  }
}
