// services/emergency.service.ts
import { Injectable } from '@angular/core';
import { Emergency } from '../models/emergency.model';

@Injectable({
  providedIn: 'root'
})
export class EmergencyService {
  private emergencies: Emergency[] = [
    {
      id: '1',
      title: 'Respiratory Emergencies',
      route: '/respiratory-emergencies',
      backgroundImage: 'assets/images/Respiratory.png',
      icon: 'assets/images/icon7.png'
    },
    {
      id: '2',
      title: 'Traumatic Injuries',
      route: '/traumatic-injuries',
      backgroundImage: 'assets/images/bruises.png',
      icon: 'assets/images/icon7.png'
    },
    {
      id: '3',
      title: 'Environmental Emergencies',
      route: '/environmental-emergencies',
      backgroundImage: 'assets/images/dehydration.png',
      icon: 'assets/images/icon7.png'
    },
    {
      id: '4',
      title: 'Allergic and Insect Bites',
      route: '/allergic-insect-bites',
      backgroundImage: 'assets/images/allergy.png',
      icon: 'assets/images/icon7.png'
    },
    {
      id: '5',
      title: 'Cardiac and Neurological',
      route: '/cardiac-neurological',
      backgroundImage: 'assets/images/neurology.png',
      icon: 'assets/images/icon7.png'
    },
    {
      id: '6',
      title: 'Other General Emergencies',
      route: '/other-general-emergencies',
      backgroundImage: 'assets/images/Other.png',
      icon: 'assets/images/icon7.png'
    }
  ];

  getEmergencies(): Emergency[] {
    return this.emergencies;
  }

  searchEmergencies(query: string): Emergency[] {
    if (!query.trim()) {
      return this.emergencies;
    }
    
    const lowerQuery = query.toLowerCase();
    return this.emergencies.filter(emergency =>
      emergency.title.toLowerCase().includes(lowerQuery)
    );
  }
}