// allergic-insect-bites.page.ts
import { Component, OnInit } from '@angular/core';
import { FirstAidService } from '../services/first-aid.service';
import { EmergencyCategory, FirstAidTechnique } from '../models/first-aid-technique.model';

@Component({
  selector: 'app-allergic-insect-bites',
  templateUrl: './allergic-insect-bites.page.html',
  styleUrls: ['./allergic-insect-bites.page.scss'],
})
export class AllergicInsectBitesPage implements OnInit {
  category: EmergencyCategory | undefined;
  selectedTechnique: FirstAidTechnique | null = null;
  isModalOpen = false;

  constructor(private firstAidService: FirstAidService) {}

  ngOnInit() {
    this.category = this.firstAidService.getCategoryById('allergic-insect-bites');
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
