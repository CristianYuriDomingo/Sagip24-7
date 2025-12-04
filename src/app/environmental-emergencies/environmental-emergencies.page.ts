// environmental-emergencies.page.ts
import { Component, OnInit } from '@angular/core';
import { FirstAidService } from '../services/first-aid.service';
import { EmergencyCategory, FirstAidTechnique } from '../models/first-aid-technique.model';

@Component({
  selector: 'app-environmental-emergencies',
  templateUrl: './environmental-emergencies.page.html',
  styleUrls: ['./environmental-emergencies.page.scss'],
})
export class EnvironmentalEmergenciesPage implements OnInit {
  category: EmergencyCategory | undefined;
  selectedTechnique: FirstAidTechnique | null = null;
  isModalOpen = false;

  constructor(private firstAidService: FirstAidService) {}

  ngOnInit() {
    // Load the environmental category data
    this.category = this.firstAidService.getCategoryById('environmental');
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