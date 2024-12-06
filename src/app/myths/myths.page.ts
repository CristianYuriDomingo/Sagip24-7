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
    { id: 'myth2', title: 'You can catch a cold from being outside in cold weather', fact: 'Fact: Cold weather doesn’t cause colds; they are caused by viruses.' },
    { id: 'myth3', title: 'Eating at night makes you gain weight', fact: 'Fact: The time you eat does not affect weight gain, but portion size and food type matter.' },
    { id: 'myth4', title: 'Cracking your knuckles causes arthritis', fact: 'Fact: No evidence suggests that cracking your knuckles leads to arthritis.' },
    { id: 'myth5', title: 'Sugar makes children hyperactive', fact: 'Fact: Studies show no clear link between sugar intake and hyperactivity in children.' },
    { id: 'myth6', title: 'You need to drink eight glasses of water a day', fact: 'Fact: Hydration needs vary individually, and beverages and food also contribute.' },
    { id: 'myth7', title: 'You only use 10% of your brain', fact: 'Fact: Brain imaging demonstrates that almost all parts of the brain are active.' },
    { id: 'myth8', title: 'Vaccines cause autism', fact: 'Fact: No scientific evidence links vaccines to autism.' },
    { id: 'myth9', title: 'Eating carrots improves your vision', fact: 'Fact: Carrots contain beta-carotene, which supports eye health but does not drastically improve vision.' },
    { id: 'myth10', title: 'You need to wait 30 minutes after eating before swimming', fact: 'Fact: There is no evidence to support the need to wait after eating before swimming.' },
    { id: 'myth11', title: 'Cold packs should always be applied to burns', fact: 'Fact: Cold packs should not be applied to burns; use cool water instead.' },
    { id: 'myth12', title: 'If someone faints, they should lie down and raise their legs', fact: 'Fact: Lying down with legs raised can help blood flow back to the brain.' },
    { id: 'myth13', title: 'Heart attacks only happen to older men', fact: 'Fact: Heart attacks can occur in both men and women of all ages.' },
    { id: 'myth14', title: 'You should apply butter to burns', fact: 'Fact: Butter traps heat; use cool water instead to treat burns.' },
    { id: 'myth15', title: 'Aspirin should be given during a heart attack', fact: 'Fact: Aspirin can help thin the blood during a heart attack, but always consult a medical professional.' },
    { id: 'myth16', title: 'Performing CPR on someone in cold weather is ineffective', fact: 'Fact: CPR can save lives regardless of temperature conditions.' },
    { id: 'myth17', title: 'Applying heat is best for muscle injuries', fact: 'Fact: Ice packs should be applied first to reduce swelling and inflammation.' },
    { id: 'myth18', title: 'Bleeding should be stopped with a tourniquet only as a last resort', fact: 'Fact: A tourniquet can be life-saving in severe bleeding situations.' },
    { id: 'myth19', title: 'Alcohol is a good treatment for wounds', fact: 'Fact: Alcohol can irritate wounds and should not be used as a treatment.' },
    { id: 'myth20', title: 'Chest pain always indicates a heart attack', fact: 'Fact: Chest pain can be caused by other issues, like muscle strain.' },
    { id: 'myth21', title: 'CPR only involves chest compressions', fact: 'Fact: Effective CPR includes chest compressions and rescue breaths.' },
    { id: 'myth22', title: 'Epinephrine is only used for allergic reactions', fact: 'Fact: Epinephrine is also used in cases of severe cardiac emergencies.' },
    { id: 'myth23', title: 'You should tilt your head back to stop a nosebleed', fact: 'Fact: Pinching your nose and leaning forward is the correct method to stop a nosebleed.' },
    { id: 'myth24', title: 'You should never perform CPR on a pregnant person', fact: 'Fact: CPR is still recommended on pregnant individuals; modifications can be made.' },
    { id: 'myth25', title: 'Water should be used to treat chemical burns', fact: 'Fact: Water is often the best first response for chemical burns.' },
    { id: 'myth26', title: 'The Heimlich maneuver should never be performed on infants', fact: 'Fact: The Heimlich maneuver should be modified appropriately for infants.' },
    { id: 'myth27', title: 'Shock only occurs after severe injuries', fact: 'Fact: Shock can result from any significant trauma or illness.' },
    { id: 'myth28', title: 'Hydrogen peroxide is best for cleaning wounds', fact: 'Fact: Saline solution is a safer choice for wound cleaning.' },
    { id: 'myth29', title: 'Defibrillators are only needed by medical professionals', fact: 'Fact: Public access defibrillators (AEDs) are designed for use by bystanders.' },
    { id: 'myth30', title: 'Burns should be treated with ice packs', fact: 'Fact: Burns should be treated with cool running water, not ice.' },
    { id: 'myth31', title: 'First aid kits always include bandages', fact: 'Fact: A first aid kit should include bandages, antiseptics, and more essential items.' },
    { id: 'myth32', title: 'Cold weather makes CPR less effective', fact: 'Fact: CPR remains effective in all weather conditions if performed correctly.' },
    { id: 'myth33', title: 'You can use honey to treat wounds', fact: 'Fact: Honey has antimicrobial properties but consult with professionals first.' },
    { id: 'myth34', title: 'If someone is unconscious, put them in a sitting position', fact: 'Fact: Lay the person on their side to prevent choking hazards.' },
    { id: 'myth35', title: 'Applying ointment to burns helps reduce pain', fact: 'Fact: Cool water should be used first; ointments can trap heat.' },
    { id: 'myth36', title: 'Bleeding stops by elevating the injured limb', fact: 'Fact: Elevation and applying pressure are key to stopping bleeding.' },
    { id: 'myth37', title: 'Gum disease is not a serious health concern', fact: 'Fact: Gum disease can contribute to systemic health issues, including heart disease.' },
    { id: 'myth38', title: 'Performing first aid has no long-term impact', fact: 'Fact: Proper first aid can significantly improve outcomes and survival chances.' },
    { id: 'myth39', title: 'You should not give water to someone with a head injury', fact: 'Fact: Hydration should be maintained but carefully monitored in head injuries.' },
    { id: 'myth40', title: 'If someone experiences a stroke, lay them flat', fact: 'Fact: Position the person with their head slightly elevated to aid blood flow.' }
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
