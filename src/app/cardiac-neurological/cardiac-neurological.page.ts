import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardiac-neurological',
  templateUrl: './cardiac-neurological.page.html',
  styleUrls: ['./cardiac-neurological.page.scss'],
})
export class CardiacNeurologicalPage {

  isFaintingModalOpen = false;
  isCprModalOpen = false;

  constructor() { }

  openFaintingModal() {
    this.isFaintingModalOpen = true;
  }

  openCprModal() {
    this.isCprModalOpen = true;
  }

  closeFaintingModal() {
    this.isFaintingModalOpen = false;
  }

  closeCprModal() {
    this.isCprModalOpen = false;
  }

}
