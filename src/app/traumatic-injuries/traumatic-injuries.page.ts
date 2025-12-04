// traumatic-injuries.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirstAidService } from '../services/first-aid.service';
import { EmergencyCategory, FirstAidTechnique } from '../models/first-aid-technique.model';

@Component({
  selector: 'app-traumatic-injuries',
  templateUrl: './traumatic-injuries.page.html',
  styleUrls: ['./traumatic-injuries.page.scss'],
})
export class TraumaticInjuriesPage implements OnInit {
  category: EmergencyCategory | undefined;
  selectedTechnique: FirstAidTechnique | null = null;
  isModalOpen = false;

  constructor(
    private firstAidService: FirstAidService,
    private router: Router
  ) {}

  ngOnInit() {
    this.category = this.firstAidService.getCategoryById('traumatic-injuries');
    
    // Check if we need to open a specific technique from navigation state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['openTechnique']) {
      const techniqueToOpen = navigation.extras.state['openTechnique'] as FirstAidTechnique;
      
      // Use setTimeout to ensure the view is fully initialized
      setTimeout(() => {
        this.openTechniqueModal(techniqueToOpen);
      }, 100);
    }
  }

  openTechniqueModal(technique: FirstAidTechnique) {
    this.selectedTechnique = technique;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedTechnique = null;
  }
}