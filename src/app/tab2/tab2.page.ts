import { Component } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isFlashlightOn = false;

  // Lottie animation options
  dashboardAnimationOptions: AnimationOptions = {
    path: 'assets/animations/dashboard-animation.json',
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  constructor(private flashlight: Flashlight) {}

  async toggleFlashlight() {
    try {
      const isAvailable = await this.flashlight.available();
      
      if (!isAvailable) {
        alert('Flashlight is not available on this device');
        return;
      }

      if (this.isFlashlightOn) {
        await this.flashlight.switchOff();
        this.isFlashlightOn = false;
      } else {
        await this.flashlight.switchOn();
        this.isFlashlightOn = true;
      }
    } catch (error) {
      console.error('Error toggling flashlight:', error);
      alert('Failed to toggle flashlight');
    }
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log('Dashboard animation loaded successfully!');
  }
}