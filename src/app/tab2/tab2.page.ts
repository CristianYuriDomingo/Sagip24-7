// ==========================================
// src/app/tab2/tab2.page.ts - COMPLETE CODE
// ==========================================

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { EmergencyService } from '../services/emergency.service';
import { Emergency } from '../models/emergency.model';
import { FirstAidService } from '../services/first-aid.service';
import { FirstAidTechnique, EmergencyCategory } from '../models/first-aid-technique.model';
import { Router } from '@angular/router';
import { PopoverController, AlertController } from '@ionic/angular';
import { LanguagePopoverComponent } from '../components/language-popover/language-popover.component';
import { LanguageService } from '../services/language.service';
import { TranslationService } from '../services/translation.service';
import { Subscription } from 'rxjs';

interface SearchResult {
  title: string;
  route: string;
  type: 'emergency' | 'technique';
  icon?: string;
  category?: EmergencyCategory;
  technique?: FirstAidTechnique;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {
  isFlashlightOn = false;
  emergencies: Emergency[] = [];
  filteredEmergencies: Emergency[] = [];
  searchQuery: string = '';
  searchSuggestions: SearchResult[] = [];
  isSearchFocused: boolean = false;
  
  currentLanguage: string = 'en';
  translations: any = {};
  private languageSubscription?: Subscription;
  private translationSubscription?: Subscription;

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
    private router: Router,
    private popoverController: PopoverController,
    private alertController: AlertController,
    private languageService: LanguageService,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.loadEmergencies();
    
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      language => {
        this.currentLanguage = language;
      }
    );

    this.translationSubscription = this.translationService.currentTranslations$.subscribe(
      translations => {
        this.translations = translations;
      }
    );
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
  }

  async presentLanguagePopover(event: any) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverComponent,
      event: event,
      translucent: true,
      cssClass: 'language-popover'
    });

    await popover.present();

    const { data } = await popover.onDidDismiss();
    
    if (data && data.language && data.language !== this.currentLanguage) {
      this.showLanguageChangeConfirmation(data.language);
    }
  }

  async showLanguageChangeConfirmation(newLanguage: string) {
    const languageName = this.languageService.getLanguageDisplayName(newLanguage);
    const message = this.translationService.translate(
      'LANGUAGE_SWITCHER.SWITCH_MESSAGE', 
      { language: languageName }
    );
    
    const alert = await this.alertController.create({
      header: this.translations.LANGUAGE_SWITCHER?.SWITCH_HEADER || 'Switch Language',
      message: message,
      buttons: [
        {
          text: this.translations.LANGUAGE_SWITCHER?.CANCEL || 'Cancel',
          role: 'cancel'
        },
        {
          text: this.translations.LANGUAGE_SWITCHER?.SWITCH || 'Switch',
          handler: () => {
            this.languageService.setLanguage(newLanguage);
          }
        }
      ]
    });

    await alert.present();
  }

  loadEmergencies() {
    this.emergencies = this.emergencyService.getEmergencies();
    this.filteredEmergencies = [...this.emergencies];
  }

  onSearchChange(event: any) {
    this.searchQuery = event.detail.value || '';
    
    if (this.searchQuery.trim().length > 0) {
      const emergencyResults = this.emergencyService.searchEmergencies(this.searchQuery);
      const techniqueResults = this.firstAidService.searchTechniques(this.searchQuery);
      
      this.searchSuggestions = [
        ...emergencyResults.map(emergency => ({
          title: emergency.title,
          route: emergency.route,
          type: 'emergency' as const,
          icon: emergency.icon
        })),
        ...techniqueResults.map(result => ({
          title: result.technique.title,
          route: result.category.route,
          type: 'technique' as const,
          icon: result.technique.icon,
          category: result.category,
          technique: result.technique
        }))
      ];
    } else {
      this.searchSuggestions = [];
    }
    
    this.filteredEmergencies = this.emergencyService.searchEmergencies(this.searchQuery);
  }

  onSearchFocus() {
    this.isSearchFocused = true;
  }

  onSearchBlur() {
    setTimeout(() => {
      this.isSearchFocused = false;
    }, 200);
  }

  selectSuggestion(suggestion: SearchResult) {
    this.searchQuery = '';
    this.searchSuggestions = [];
    this.filteredEmergencies = [...this.emergencies];
    this.isSearchFocused = false;
    
    if (suggestion.type === 'technique' && suggestion.technique) {
      this.router.navigate([suggestion.route], {
        state: {
          openTechnique: suggestion.technique
        }
      });
    } else {
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


