import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { EmergencyService } from '../services/emergency.service';
import { Emergency } from '../models/emergency.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  isFlashlightOn = false;
  emergencies: Emergency[] = [];
  filteredEmergencies: Emergency[] = [];
  searchQuery: string = '';
  searchSuggestions: Emergency[] = [];
  isSearchFocused: boolean = false;

  // Lottie animation options
  dashboardAnimationOptions: AnimationOptions = {
    path: 'assets/animations/dashboard-animation.json',
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  constructor(
    private flashlight: Flashlight,
    private emergencyService: EmergencyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadEmergencies();
  }

  loadEmergencies() {
    this.emergencies = this.emergencyService.getEmergencies();
    this.filteredEmergencies = [...this.emergencies];
  }

  onSearchChange(event: any) {
    this.searchQuery = event.detail.value || '';
    
    if (this.searchQuery.trim().length > 0) {
      this.searchSuggestions = this.emergencyService.searchEmergencies(this.searchQuery);
    } else {
      this.searchSuggestions = [];
    }
    
    // Also filter the cards below
    this.filteredEmergencies = this.emergencyService.searchEmergencies(this.searchQuery);
  }

  onSearchFocus() {
    this.isSearchFocused = true;
  }

  onSearchBlur() {
    // Delay to allow click events on results to fire
    setTimeout(() => {
      this.isSearchFocused = false;
    }, 200);
  }

  selectSuggestion(emergency: Emergency) {
    // Clear search and navigate
    this.searchQuery = '';
    this.searchSuggestions = [];
    this.filteredEmergencies = [...this.emergencies];
    this.isSearchFocused = false;
    
    // Navigate to the emergency page
    this.router.navigate([emergency.route]);
  }

  clearSearch() {
    this.searchQuery = '';
    this.searchSuggestions = [];
    this.filteredEmergencies = [...this.emergencies];
    this.isSearchFocused = false;
  }

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