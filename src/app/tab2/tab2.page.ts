// src/app/tab2/tab2.page.ts
import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { EmergencyService } from '../services/emergency.service';
import { Emergency } from '../models/emergency.model';
import { FirstAidService } from '../services/first-aid.service';
import { FirstAidTechnique, EmergencyCategory } from '../models/first-aid-technique.model';
import { Router } from '@angular/router';

// Interface for unified search results
interface SearchResult {
  title: string;
  route: string;
  type: 'emergency' | 'technique';
  icon?: string;
  category?: EmergencyCategory;
  technique?: FirstAidTechnique; // Add technique reference
}

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
  searchSuggestions: SearchResult[] = [];
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
    private firstAidService: FirstAidService,
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
      // Search both emergencies and techniques
      const emergencyResults = this.emergencyService.searchEmergencies(this.searchQuery);
      const techniqueResults = this.firstAidService.searchTechniques(this.searchQuery);
      
      // Combine results into unified format
      this.searchSuggestions = [
        // Add emergency categories
        ...emergencyResults.map(emergency => ({
          title: emergency.title,
          route: emergency.route,
          type: 'emergency' as const,
          icon: emergency.icon
        })),
        // Add first aid techniques with full data
        ...techniqueResults.map(result => ({
          title: result.technique.title,
          route: result.category.route,
          type: 'technique' as const,
          icon: result.technique.icon,
          category: result.category,
          technique: result.technique // Pass the full technique object
        }))
      ];
    } else {
      this.searchSuggestions = [];
    }
    
    // Filter the emergency cards below
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

  selectSuggestion(suggestion: SearchResult) {
    // Clear search
    this.searchQuery = '';
    this.searchSuggestions = [];
    this.filteredEmergencies = [...this.emergencies];
    this.isSearchFocused = false;
    
    // Navigate to the appropriate page with state data
    if (suggestion.type === 'technique' && suggestion.technique) {
      // Navigate with state containing the technique to open
      this.router.navigate([suggestion.route], {
        state: {
          openTechnique: suggestion.technique
        }
      });
    } else {
      // Regular navigation for emergency categories
      this.router.navigate([suggestion.route]);
    }
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