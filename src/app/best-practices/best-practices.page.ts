import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-practices',
  templateUrl: './best-practices.page.html',
  styleUrls: ['./best-practices.page.scss'],
})
export class BestPracticesPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  cards = [
    { title: 'Card 1', content: 'Content of Card 1' },
    { title: 'Card 2', content: 'Content of Card 2' },
    { title: 'Card 3', content: 'Content of Card 3' },
    { title: 'Card 4', content: 'Content of Card 4' },
    { title: 'Card 5', content: 'Content of Card 5' },
  ];
}
