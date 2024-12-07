import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  // Method to open the dialer
  dialEmergencyContact() {
    window.open('tel:911', '_system'); // Opens the native dialer
  }
}
