import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visual-aids',
  templateUrl: './visual-aids.page.html',
  styleUrls: ['./visual-aids.page.scss'],
})
export class VisualAidsPage {

  isResModalOpen = false;
  isTraumModalOpen = false;
  isEnvModalOpen = false;
  isAllModalOpen = false;
  isCardModalOpen = false;
  isOtherModalOpen = false;

  constructor(private modalCtrl: ModalController, private router: Router) {}

  // Method to close modals first
  async goBack() {
    if (await this.modalCtrl.getTop()) {
      await this.modalCtrl.dismiss();  // Close the top modal if open
    } else {
      this.router.navigate(['/home']);  // If no modals exist, navigate back
    }
  }

  openResModal() {
    this.isResModalOpen = true;
  }
  openTraumModal() {
    this.isTraumModalOpen = true;
  }
  openEnvModal() {
    this.isEnvModalOpen = true;
  }
  openAllModal() {
    this.isAllModalOpen = true;
  }
  openCardModal() {
    this.isCardModalOpen = true;
  }
  openOtherModal() {
    this.isOtherModalOpen = true;
  }

  closeResModal() {
    this.isResModalOpen = false;
  }
  closeTraumModal() {
    this.isTraumModalOpen = false;
  }
  closeEnvModal() {
    this.isEnvModalOpen = false;
  }
  closeAllModal() {
    this.isAllModalOpen = false;
  }
  closeCardModal() {
    this.isCardModalOpen = false;
  }
  closeOtherModal() {
    this.isOtherModalOpen = false;
  }
}
