import { Component } from '@angular/core';

@Component({
  selector: 'app-traumatic-injuries',
  templateUrl: 'traumatic-injuries.page.html',
  styleUrls: ['traumatic-injuries.page.scss'],
})
export class TraumaticInjuriesPage {

  // Modal state variables for each injury type
  isMinorBleedingModalOpen = false;
  isSprainsModalOpen = false;
  isBurnsModalOpen = false;
  isBruiseModalOpen = false;

  constructor() {}

  // Methods to open modals
  openMinorBleedingModal() {
    this.isMinorBleedingModalOpen = true;
  }

  openSprainsModal() {
    this.isSprainsModalOpen = true;
  }

  openBurnsModal() {
    this.isBurnsModalOpen = true;
  }

  openBruiseModal() {
    this.isBruiseModalOpen = true;
  }

  // Methods to close modals
  closeMinorBleedingModal() {
    this.isMinorBleedingModalOpen = false;
  }

  closeSprainsModal() {
    this.isSprainsModalOpen = false;
  }

  closeBurnsModal() {
    this.isBurnsModalOpen = false;
  }

  closeBruiseModal() {
    this.isBruiseModalOpen = false;
  }

}
