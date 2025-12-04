// cardiac-neurological.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirstAidService } from '../services/first-aid.service';
import { EmergencyCategory, FirstAidTechnique, FirstAidStep } from '../models/first-aid-technique.model';

@Component({
  selector: 'app-cardiac-neurological',
  templateUrl: './cardiac-neurological.page.html',
  styleUrls: ['./cardiac-neurological.page.scss'],
})
export class CardiacNeurologicalPage implements OnInit {
  category: EmergencyCategory | undefined;
  selectedTechnique: FirstAidTechnique | null = null;
  isModalOpen = false;

  constructor(
    private firstAidService: FirstAidService,
    private router: Router
  ) {}

  ngOnInit() {
    // Load the cardiac-neurological category data
    this.category = this.firstAidService.getCategoryById('cardiac-neurological');
    
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