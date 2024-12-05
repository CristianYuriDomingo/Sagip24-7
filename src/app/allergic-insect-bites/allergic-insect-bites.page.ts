import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allergic-insect-bites',
  templateUrl: './allergic-insect-bites.page.html',
  styleUrls: ['./allergic-insect-bites.page.scss'],
})
export class AllergicInsectBitesPage{

  isSnakeBitesModalOpen = false;
  isAllergicReactionModalOpen = false;
  isInsectStingsModalOpen = false;

  constructor() { }

  openSnakeBitesModal() {
    this.isSnakeBitesModalOpen = true;
  }

  openAllergicReactionModal() {
    this.isAllergicReactionModalOpen = true;
  }

  openInsectStingsModal() {
    this.isInsectStingsModalOpen = true;
  }

  closeSnakeBitesModal() {
    this.isSnakeBitesModalOpen = false;
  }
  closeAllergicReactionModal() {
    this.isAllergicReactionModalOpen = false;
  }
  closeInsectStingsModal() {
    this.isInsectStingsModalOpen = false;
  }

  

 
}
