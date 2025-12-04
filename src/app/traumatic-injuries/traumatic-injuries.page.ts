// traumatic-injuries.page.ts
import { Component, OnInit } from '@angular/core';
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

  constructor(private firstAidService: FirstAidService) {}

  ngOnInit() {
    this.category = this.firstAidService.getCategoryById('traumatic-injuries');
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