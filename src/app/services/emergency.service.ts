// services/emergency.service.ts
import { Injectable } from '@angular/core';
import { Emergency } from '../models/emergency.model';
import { TranslationService } from './translation.service';

@Injectable({
  providedIn: 'root'
})
export class EmergencyService {
  private baseEmergencies: Array<Emergency & { titleKey: string, searchTerms: string[] }> = [
    {
      id: '1',
      title: 'Respiratory Emergencies',
      titleKey: 'CATEGORIES.RESPIRATORY_EMERGENCIES',
      route: '/respiratory-emergencies',
      backgroundImage: 'assets/images/Respiratory.png',
      icon: 'assets/images/icon7.png',
      searchTerms: ['respiratory', 'breathing', 'hininga', 'hika', 'asthma', 'choking', 'nabulunan']
    },
    {
      id: '2',
      title: 'Traumatic Injuries',
      titleKey: 'CATEGORIES.TRAUMATIC_INJURIES',
      route: '/traumatic-injuries',
      backgroundImage: 'assets/images/bruises.png',
      icon: 'assets/images/icon7.png',
      searchTerms: ['traumatic', 'injury', 'sugat', 'pinsala', 'trauma', 'wound', 'fracture', 'bali']
    },
    {
      id: '3',
      title: 'Environmental Emergencies',
      titleKey: 'CATEGORIES.ENVIRONMENTAL_EMERGENCIES',
      route: '/environmental-emergencies',
      backgroundImage: 'assets/images/dehydration.png',
      icon: 'assets/images/icon7.png',
      searchTerms: ['environmental', 'kapaligiran', 'heat', 'cold', 'init', 'lamig', 'dehydration', 'hypothermia']
    },
    {
      id: '4',
      title: 'Allergic and Insect Bites',
      titleKey: 'CATEGORIES.ALLERGIC_INSECT_BITES',
      route: '/allergic-insect-bites',
      backgroundImage: 'assets/images/allergy.png',
      icon: 'assets/images/icon7.png',
      searchTerms: ['allergic', 'allergy', 'insect', 'bite', 'alerdyi', 'kagat', 'kulisap', 'lamok', 'langgam']
    },
    {
      id: '5',
      title: 'Cardiac and Neurological',
      titleKey: 'CATEGORIES.CARDIAC_NEUROLOGICAL',
      route: '/cardiac-neurological',
      backgroundImage: 'assets/images/neurology.png',
      icon: 'assets/images/icon7.png',
      searchTerms: ['cardiac', 'heart', 'neurological', 'stroke', 'puso', 'atake', 'utak', 'seizure']
    },
    {
      id: '6',
      title: 'Other General Emergencies',
      titleKey: 'CATEGORIES.OTHER_GENERAL_EMERGENCIES',
      route: '/other-general-emergencies',
      backgroundImage: 'assets/images/Other.png',
      icon: 'assets/images/icon7.png',
      searchTerms: ['other', 'general', 'iba', 'emergency', 'emerhensya']
    }
  ];

  constructor(private translationService: TranslationService) {}

  getEmergencies(): Emergency[] {
    // Return emergencies with translated titles
    return this.baseEmergencies.map(emergency => ({
      id: emergency.id,
      title: this.translationService.get(emergency.titleKey) || emergency.title,
      route: emergency.route,
      backgroundImage: emergency.backgroundImage,
      icon: emergency.icon
    }));
  }

  searchEmergencies(query: string): Emergency[] {
    if (!query.trim()) {
      return this.getEmergencies();
    }
    
    const lowerQuery = query.toLowerCase();
    const filtered = this.baseEmergencies.filter(emergency => {
      const translatedTitle = this.translationService.get(emergency.titleKey) || emergency.title;
      const titleMatch = translatedTitle.toLowerCase().includes(lowerQuery);
      const searchTermsMatch = emergency.searchTerms.some(term => 
        term.toLowerCase().includes(lowerQuery)
      );
      return titleMatch || searchTermsMatch;
    });

    // Return with translated titles
    return filtered.map(emergency => ({
      id: emergency.id,
      title: this.translationService.get(emergency.titleKey) || emergency.title,
      route: emergency.route,
      backgroundImage: emergency.backgroundImage,
      icon: emergency.icon
    }));
  }
}