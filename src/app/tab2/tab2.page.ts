import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements AfterViewInit {
  // Use @ViewChild to get the content-below section, ensure the type is ElementRef
  @ViewChild('contentBelow') contentBelow: ElementRef | undefined;

  constructor() {}

  // ngAfterViewInit ensures that contentBelow is available after the view is initialized
  ngAfterViewInit() {
    if (this.contentBelow) {
      console.log('contentBelow section is available');
    } else {
      console.error('contentBelow section is not available');
    }
  }

  // Function to scroll to the content-below section
  scrollToContentBelow() {
    if (this.contentBelow) {
      this.contentBelow.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
