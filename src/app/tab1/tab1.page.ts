import { Component } from '@angular/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  // Method to open the dialer with vibration
  async dialEmergencyContact() {
    try {
      // Trigger a strong vibration (like a phone dialing)
      await Haptics.impact({ style: ImpactStyle.Heavy });
      
      // Optional: Add a second vibration for emphasis
      setTimeout(async () => {
        await Haptics.impact({ style: ImpactStyle.Medium });
      }, 100);
      
      // Open the native dialer
      window.open('tel:911', '_system');
    } catch (error) {
      console.error('Haptics not available:', error);
      // Still open dialer even if vibration fails
      window.open('tel:911', '_system');
    }
  }
}