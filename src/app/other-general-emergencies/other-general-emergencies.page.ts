import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-general-emergencies',
  templateUrl: './other-general-emergencies.page.html',
  styleUrls: ['./other-general-emergencies.page.scss'],
})
export class OtherGeneralEmergenciesPage {

  isNoseBleedModalOpen = false;
  isEyeInjuryModalOpen = false;
  isForeignObjectModalOpen = false;

  constructor() { }

  openNoseBleedModal() {
    this.isNoseBleedModalOpen = true;
  }

  openEyeInjuryModal() {
    this.isEyeInjuryModalOpen = true;
  }

  openForeignObjectModal() {
    this.isForeignObjectModalOpen = true;
  }

  // Methods to close modals
  closeNoseBleedModal() {
    this.isNoseBleedModalOpen = false;
  }

  closeEyeInjuryModal() {
    this.isEyeInjuryModalOpen = false;
  }

  closeForeignObjectModal() {
    this.isForeignObjectModalOpen = false;
  }
}
