import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-environmental-emergencies',
  templateUrl: './environmental-emergencies.page.html',
  styleUrls: ['./environmental-emergencies.page.scss'],
})
export class EnvironmentalEmergenciesPage {

  isHeatExhaustionModalOpen = false;
  isMildHypothermiaModalOpen = false;
  isDehydrationModalOpen = false;

  constructor() { }

  openHeatExhaustionModal() {
    this.isHeatExhaustionModalOpen = true;
  }

  openMildHypothermiaModal() {
    this.isMildHypothermiaModalOpen = true;
  }

  openDehydrationModal() {
    this.isDehydrationModalOpen = true;
  }

  // Methods to close modals
  closeHeatExhaustionModal() {
    this.isHeatExhaustionModalOpen = false;
  }

  closeMildHypothermiaModal() {
    this.isMildHypothermiaModalOpen = false;
  }

  closeDehydrationModal() {
    this.isDehydrationModalOpen = false;
  }

}
