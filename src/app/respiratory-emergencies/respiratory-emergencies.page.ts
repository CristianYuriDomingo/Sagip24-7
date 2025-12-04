// respiratory-emergencies.page.ts
import { Component, OnInit } from '@angular/core';
import { FirstAidService } from '../services/first-aid.service';
import { EmergencyCategory, FirstAidTechnique } from '../models/first-aid-technique.model';

@Component({
  selector: 'app-respiratory-emergencies',
  templateUrl: './respiratory-emergencies.page.html',
  styleUrls: ['./respiratory-emergencies.page.scss'],
})
export class RespiratoryEmergenciesPage implements OnInit {
  category: EmergencyCategory | undefined;
  selectedTechnique: FirstAidTechnique | null = null;
  isModalOpen = false;

  constructor(private firstAidService: FirstAidService) {}

  ngOnInit() {
    this.category = this.firstAidService.getCategoryById('respiratory-emergencies');
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
