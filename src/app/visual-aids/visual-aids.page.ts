import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visual-aids',
  templateUrl: './visual-aids.page.html',
  styleUrls: ['./visual-aids.page.scss'],
})
export class VisualAidsPage{

  isResModalOpen = false;
  isTraumModalOpen = false;
  isEnvModalOpen = false;
  isAllModalOpen = false;
  isCardModalOpen = false;
  isOtherModalOpen = false;
 

  constructor() { }

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
