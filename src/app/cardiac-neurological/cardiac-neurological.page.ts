// cardiac-neurological.page.ts
import { Component, OnInit } from '@angular/core';
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

  constructor(private firstAidService: FirstAidService) {}

  ngOnInit() {
    // Load the cardiac-neurological category data
    this.category = this.firstAidService.getCategoryById('cardiac-neurological');
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