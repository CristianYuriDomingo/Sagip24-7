import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myths',
  templateUrl: './myths.page.html',
  styleUrls: ['./myths.page.scss'],
})
export class MythsPage implements OnInit {
  // Array to store myths with facts and ids
  myths = [
    { id: 'myth1', title: 'You should slap the back of someone who is choking', fact: 'Fact: The Heimlich maneuver is the recommended procedure for choking.' },
    { id: 'myth2', title: 'You can catch a cold from being outside in the cold weather', fact: 'Fact: Cold weather doesn’t cause colds; they are caused by viruses.' },
    { id: 'myth3', title: 'Eating at night makes you gain weight', fact: 'Fact: The time you eat does not affect weight gain, but what you eat and how much matters.' },
    { id: 'myth4', title: 'Cracking your knuckles causes arthritis', fact: 'Fact: No evidence suggests that cracking your knuckles leads to arthritis.' },
    { id: 'myth5', title: 'Sugar makes children hyperactive', fact: 'Fact: Studies show no clear link between sugar intake and hyperactivity in children.' },
    { id: 'myth6', title: 'You need to drink eight glasses of water a day', fact: 'Fact: Hydration needs vary by individual, and you can hydrate through other beverages and food.' },
    { id: 'myth7', title: 'You only use 10% of your brain', fact: 'Fact: Brain imaging shows that virtually all areas of the brain have a known function.' },
    { id: 'myth8', title: 'Vaccines cause autism', fact: 'Fact: No scientific evidence links vaccines to autism.' },
    { id: 'myth9', title: 'Eating carrots improves your vision', fact: 'Fact: Carrots are good for eye health, but they do not drastically improve vision.' },
    { id: 'myth10', title: 'You need to wait 30 minutes after eating before swimming', fact: 'Fact: There is no scientific evidence to support this myth. You can swim after eating.' }
  ];

  // Object to store visibility of facts for each myth
  visibleFacts: { [key: string]: boolean } = {};

  constructor() {}

  ngOnInit() {}

  // Toggle fact visibility based on myth identifier
  toggleFact(myth: string) {
    this.visibleFacts[myth] = !this.visibleFacts[myth];
  }

  // Check if a fact is visible for a given myth
  isFactVisible(myth: string): boolean {
    return this.visibleFacts[myth] || false;
  }
}
