import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-respiratory-emergencies',
  templateUrl: './respiratory-emergencies.page.html',
  styleUrls: ['./respiratory-emergencies.page.scss'],
})
export class RespiratoryEmergenciesPage{

  isChokingForAdultModalOpen = false;
  isChokingForBabiesModalOpen = false;
  isMildAsthmaModalOpen = false;
  isHyperventilationModalOpen = false;

  constructor() { }

  openChokingForAdultModal() {
    this.isChokingForAdultModalOpen = true;
  }

  openChokingForBabiesModal() {
    this.isChokingForBabiesModalOpen = true;
  }

  openMildAsthmaModal() {
    this.isMildAsthmaModalOpen = true;
  }

  openHyperventilationModal() {
    this.isHyperventilationModalOpen = true;
  }

  closeChokingForAdultModal() {
    this.isChokingForAdultModalOpen = false;
  }

  closeChokingForBabiesModal() {
    this.isChokingForBabiesModalOpen = false;
  }
  closeMildAsthmaModal() {
    this.isMildAsthmaModalOpen = false;
  }
  closeHyperventilationModal() {
    this.isHyperventilationModalOpen = false;
  }

}
