// services/first-aid.service.ts
import { Injectable } from '@angular/core';
import { EmergencyCategory, FirstAidTechnique } from '../models/first-aid-technique.model';

@Injectable({
    providedIn: 'root'
})
export class FirstAidService {
    private categories: EmergencyCategory[] = [
        {
            id: 'environmental',
            title: 'Environmental and Physical Emergencies',
            route: '/environmental-emergencies',
            backgroundImage: 'assets/images/Environmental/dehydration1.png',
            headerImage: 'assets/images/Environmental/dehydration1.png',
            logoIcon: 'assets/images/Environmental/environmental-logo.png',
            categoryIcon: 'assets/images/icon7.png',
            keyTakeawayTitle: 'Understanding the Basics',
            keyTakeawayDescription: 'Environmental and physical emergencies, including heat exhaustion, mild hypothermia, and dehydration, demand quick intervention. Understand the critical steps to address these conditions and restore balance to the body in extreme environments.',
            techniques: [
                {
                    id: 'heat-exhaustion',
                    title: 'Heat Exhaustion',
                    icon: 'assets/images/Environmental/heat.png',
                    modalTitle: 'Heat Exhaustion: First Aid Steps',
                    description: 'Follow these steps to help alleviate heat exhaustion, prevent it from progressing to heatstroke, and ensure the person\'s safety. Quick action is crucial to regulate body temperature and restore hydration.',
                    steps: [
                        {
                            stepNumber: 1,
                            title: 'Move to a Cooler Area',
                            image: 'assets/images/Environmental/Step1-heat.png',
                            description: [
                                'Relocate the person to a cool, shaded, or air-conditioned space.',
                                'Reducing exposure to heat immediately helps prevent the condition from worsening.'
                            ]
                        },
                        {
                            stepNumber: 2,
                            title: 'Hydrate Slowly',
                            image: 'assets/images/Environmental/Step2-heat.png',
                            description: [
                                'Encourage the person to sip water or electrolyte drinks gradually.',
                                'Hydration restores lost fluids and minerals, which are essential to combat dehydration. Avoid giving very cold drinks as they can cause stomach cramps.'
                            ]
                        },
                        {
                            stepNumber: 3,
                            title: 'Cool the Body',
                            image: 'assets/images/Environmental/Step3-heat.png',
                            description: [
                                'Apply wet cloths, cool water, or use a fan to help lower their body temperature.',
                                'Focus on areas like the neck, armpits, and wrists, where cooling is most effective.'
                            ]
                        },
                        {
                            stepNumber: 4,
                            title: 'Seek Medical Help If Necessary',
                            image: 'assets/images/doctor.png',
                            description: [
                                'If symptoms persist or worsen (e.g., nausea, confusion, or fainting), call for emergency assistance.',
                                'Prolonged heat exhaustion can lead to heatstroke, a life-threatening condition requiring immediate medical care.'
                            ]
                        }
                    ]
                },
                {
                    id: 'mild-hypothermia',
                    title: 'Mild Hypothermia',
                    icon: 'assets/images/Environmental/hypotermia.png',
                    modalTitle: 'Mild Hypothermia: First Aid Steps',
                    description: 'Follow these steps to help warm the person safely, stabilize their condition, and prevent further heat loss. Timely intervention is critical to avoid worsening symptoms and potential complications.',
                    steps: [
                        {
                            stepNumber: 1,
                            title: 'Move to a Warm, Dry Place',
                            image: 'assets/images/Environmental/Step1-hy.png',
                            description: [
                                'Relocate the person to a sheltered, warm environment.',
                                'Removing them from the cold source stops further heat loss and creates a safe setting for recovery.'
                            ]
                        },
                        {
                            stepNumber: 2,
                            title: 'Remove Wet Clothing and Cover with Warm Blankets',
                            image: 'assets/images/Environmental/Step2-hy.png',
                            description: [
                                'Wet clothing draws heat away from the body, so replace it with dry layers.',
                                'Use blankets or warm clothing to insulate and retain body heat effectively.'
                            ]
                        },
                        {
                            stepNumber: 3,
                            title: 'Offer Warm Drinks',
                            image: 'assets/images/Environmental/Step3-hy.png',
                            description: [
                                'If the person is fully conscious, provide warm (not hot) non-alcoholic and non-caffeinated beverages like water, tea, or broth',
                                'Warm fluids help raise internal body temperature gently and hydrate them.'
                            ]
                        },
                        {
                            stepNumber: 4,
                            title: 'Avoid Direct Heat Sources',
                            image: 'assets/images/Environmental/Step4-hy.png',
                            description: [
                                'Do not apply hot water bottles, heating pads, or similar devices directly to the skin.',
                                'Sudden exposure to intense heat can cause shock or burns and may worsen their condition.'
                            ]
                        }
                    ]
                },
                {
                    id: 'dehydration',
                    title: 'Dehydration',
                    icon: 'assets/images/Environmental/dehydration.png',
                    modalTitle: 'Dehydration: First Aid Steps',
                    description: 'Follow these steps to help restore hydration, prevent complications, and support recovery. Early intervention can alleviate symptoms and avoid the risks of severe dehydration.',
                    steps: [
                        {
                            stepNumber: 1,
                            title: 'Encourage Small Sips of Water or Electrolyte Drinks',
                            image: 'assets/images/Environmental/Step1-dehy.png',
                            description: [
                                'Provide water or oral rehydration solutions to replace lost fluids and essential salts.',
                                'Drinking in small sips helps the body absorb fluids more effectively without causing nausea.'
                            ]
                        },
                        {
                            stepNumber: 2,
                            title: 'Avoid Sugary or Caffeinated Beverages',
                            image: 'assets/images/Environmental/Step2-dehy.png',
                            description: [
                                'Do not offer sodas, coffee, or energy drinks as they can worsen dehydration by drawing more water out of the body.',
                                'Stick to plain water or specially formulated electrolyte drinks for best results.'
                            ]
                        },
                        {
                            stepNumber: 3,
                            title: 'Rest and Monitor Symptoms',
                            image: 'assets/images/Environmental/Step3-dehy.png',
                            description: [
                                'Allow the person to rest in a cool, shaded area to conserve energy and prevent further fluid loss.',
                                'Keep an eye out for signs of severe dehydration, such as confusion, dizziness, or reduced urine output, and seek medical attention if these occur.'
                            ]
                        }
                    ]
                }
            ]
        }, {
            id: 'other-general-emergencies',
            title: 'Other General Emergencies',
            route: '/other-general-emergencies',
            backgroundImage: 'assets/images/Other-Emergency/Other1.png',
            headerImage: 'assets/images/Other-Emergency/Other1.png',
            logoIcon: 'assets/images/Other-Emergency/other.png',
            categoryIcon: 'assets/images/icon7.png',
            keyTakeawayTitle: 'Understanding the Basics',
            keyTakeawayDescription: 'General emergencies such as nosebleeds and eye injuries can occur unexpectedly. Immediate action is essential to prevent further harm and ensure proper care. Learn how to manage these common yet urgent situations effectively.',
            techniques: [
                {
                    id: 'nosebleeds',
                    title: 'Nosebleeds',
                    icon: 'assets/images/Other-Emergency/nosebleed.png',
                    modalTitle: 'Nosebleeds: First Aid Steps',
                    description: 'Follow these steps to safely manage a nosebleed, minimize discomfort, and prevent complications. Prompt and proper care can help control the bleeding effectively.',
                    steps: [
                        {
                            stepNumber: 1,
                            title: 'Pinch the Nose Below the Bridge',
                            image: 'assets/images/Other-Emergency/Nosebleed-step1.png',
                            description: [
                                'Use your thumb and index finger to pinch the soft part of the nose just below the bridge.',
                                'Firm pressure helps compress the blood vessels, slowing and stopping the bleeding.'
                            ]
                        },
                        {
                            stepNumber: 2,
                            title: 'Lean Forward, Not Backward',
                            image: 'assets/images/Other-Emergency/Nosebleed-step2.png',
                            description: [
                                'Have the person sit up straight and lean slightly forward to prevent swallowing blood, which can cause nausea or vomiting.',
                                'Avoid tilting the head back, as this directs blood into the throat and stomach.'
                            ]
                        },
                        {
                            stepNumber: 3,
                            title: 'Maintain Pressure for 5–10 Minutes',
                            image: 'assets/images/Other-Emergency/Nosebleed-step3.png',
                            description: [
                                'Keep a firm grip on the nose for at least 5–10 minutes without releasing to check.',
                                'Consistent pressure is essential for clot formation and stopping the bleeding.'
                            ]
                        },
                        {
                            stepNumber: 4,
                            title: 'Seek Medical Attention If Necessary',
                            image: 'assets/images/doctor.png',
                            description: [
                                'If bleeding continues after 15 minutes or is heavy, seek professional help.',
                                'Recurrent or severe nosebleeds may indicate an underlying health condition that requires medical evaluation.'
                            ]
                        }
                    ]
                },
                {
                    id: 'eye-injury',
                    title: 'Eye Injury',
                    icon: 'assets/images/Other-Emergency/injuries.png',
                    modalTitle: 'First Aid for Eye Injuries',
                    description: 'Follow these steps to address eye injuries safely and protect vision. Quick, gentle care can help prevent further damage while ensuring prompt medical attention when needed.',
                    steps: [
                        {
                            stepNumber: 1,
                            title: 'Flush the Eye Gently with Clean Water',
                            image: 'assets/images/Other-Emergency/EyeInjury-step1.png',
                            description: [
                                'Use lukewarm water to rinse the eye continuously for 15–20 minutes.',
                                'This helps remove small debris, irritants, or chemicals that may have entered the eye.'
                            ]
                        },
                        {
                            stepNumber: 2,
                            title: 'Avoid Rubbing or Applying Pressure',
                            image: 'assets/images/Other-Emergency/EyeInjury-step2.png',
                            description: [
                                'Do not rub or press on the injured eye, as this can worsen the injury or push debris further into the eye.',
                                'Keeping the eye untouched helps minimize irritation and additional harm.'
                            ]
                        },
                        {
                            stepNumber: 3,
                            title: 'Cover the Eye and Seek Medical Assistance',
                            image: 'assets/images/doctor.png',
                            description: [
                                'If the object remains or the injury seems severe, cover the eye lightly with a clean cloth or sterile gauze.',
                                'Seek immediate medical attention to ensure proper removal of foreign objects and to prevent complications.'
                            ]
                        }
                    ]
                },
                {
                    id: 'foreign-object',
                    title: 'Small Foreign Object',
                    icon: 'assets/images/Other-Emergency/cube.png',
                    modalTitle: 'First Aid for Small Foreign Objects',
                    description: 'Follow these steps to safely remove small foreign objects, reduce the risk of infection, and promote healing. Immediate and careful action can help prevent further injury.',
                    steps: [
                        {
                            stepNumber: 1,
                            title: 'Carefully Remove the Object with Clean Tweezers or Cotton Swab',
                            image: 'assets/images/Other-Emergency/eye-step1.png',
                            description: [
                                'If the foreign object is visible and easily reachable, use clean, sterilized tweezers to gently grasp and remove it.',
                                'Be cautious not to push the object further into the skin or tissue.'
                            ]
                        },
                        {
                            stepNumber: 2,
                            title: 'Avoid Poking or Pushing the Object Deeper',
                            image: 'assets/images/Other-Emergency/eye-step2.png',
                            description: [
                                'If the object is deeply embedded or hard to reach, do not attempt to remove it with tweezers, as this can cause additional injury.',
                                'Instead, seek professional medical help to safely remove it.'
                            ]
                        },
                        {
                            stepNumber: 3,
                            title: 'Clean the Area and Apply a Bandage if Necessary',
                            image: 'assets/images/Other-Emergency/eye-step3.png',
                            description: [
                                'After removing the foreign object, clean the area with soap and water to prevent infection.',
                                'Apply a sterile bandage if needed to protect the wound and help it heal.'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'cardiac-neurological',
            title: 'Cardiac and Neurological',
            route: '/cardiac-neurological',
            backgroundImage: 'assets/images/Cardiac/neurology1.png',
            headerImage: 'assets/images/Cardiac/neurology1.png',
            logoIcon: 'assets/images/Cardiac/cardiac-logo.png',
            categoryIcon: 'assets/images/icon7.png',
            keyTakeawayTitle: 'Understanding the Basics',
            keyTakeawayDescription: 'Cardiac and neurological emergencies, including fainting and the need for CPR, require immediate attention. Knowing the vital steps in administering CPR and managing fainting can make a life-saving difference in critical situations.',
            techniques: [
                {
                    id: 'fainting',
                    title: 'Fainting',
                    icon: 'assets/images/Cardiac/fainting.png',
                    modalTitle: 'Fainting: First Aid Steps',
                    description: 'Follow these steps to safely assist someone who has fainted, improve their blood circulation, and ensure their recovery. Quick action can help prevent complications and identify if medical attention is necessary.',
                    steps: [
                        {
                            stepNumber: 1,
                            title: 'Lay the Person Flat on Their Back',
                            image: 'assets/images/Cardiac/fainting-step1.png',
                            description: [
                                'Position the person on a flat surface to promote steady blood flow to the brain.',
                                'Ensure their head is turned to the side to prevent choking if they vomit.'
                            ]
                        },
                        {
                            stepNumber: 2,
                            title: 'Elevate Their Legs',
                            image: 'assets/images/Cardiac/fainting-step2.png',
                            description: [
                                'Raise the legs about 12 inches off the ground to improve blood flow and oxygen delivery to the brain.',
                                'This simple step often helps the person regain consciousness faster.'
                            ]
                        },
                        {
                            stepNumber: 3,
                            title: 'Loosen Tight Clothing and Provide Fresh Air',
                            image: 'assets/images/Cardiac/fainting-step3.png',
                            description: [
                                'Loosen belts, collars, or tight clothing to ensure unrestricted breathing.',
                                'Make sure the area is well-ventilated, and fan them gently if needed to keep them comfortable.'
                            ]
                        },
                        {
                            stepNumber: 4,
                            title: 'Call for Help If Necessary',
                            image: 'assets/images/Cardiac/fainting-step4.png',
                            description: [
                                'If they don\'t regain consciousness within 1–2 minutes or show other concerning symptoms (e.g., difficulty breathing, chest pain), seek medical help immediately.',
                                'Persistent unconsciousness may indicate a more serious condition requiring urgent medical attention.'
                            ]
                        }
                    ]
                },
                {
                    id: 'cpr',
                    title: 'CPR',
                    icon: 'assets/images/Cardiac/cpr.png',
                    modalTitle: 'CPR: Lifesaving Steps for Cardiac Arrest',
                    description: 'Follow these steps to provide immediate, lifesaving assistance during cardiac arrest. Performing CPR promptly can double or even triple a person\'s chances of survival until professional help arrives.',
                    steps: [
                        {
                            stepNumber: 1,
                            title: 'Check for Responsiveness and Breathing',
                            image: 'assets/images/Cardiac/cpr-step1.png',
                            description: [
                                'Tap the person and shout to confirm they are unresponsive. Check if they are breathing normally (gasping or irregular breaths count as abnormal).',
                                'Quickly identifying cardiac arrest is critical to beginning life-saving measures.'
                            ]
                        },
                        {
                            stepNumber: 2,
                            title: 'Call Emergency Services and Retrieve an AED',
                            image: 'assets/images/Cardiac/cpr-step2.png',
                            description: [
                                'Dial emergency services immediately and request an Automated External Defibrillator (AED) if available.',
                                'Alerting professionals ensures timely advanced care while preparing to use an AED can restore the heart\'s rhythm.'
                            ]
                        },
                        {
                            stepNumber: 3,
                            title: 'Start Chest Compressions',
                            image: 'assets/images/Cardiac/cpr-step3.png',
                            description: [
                                'Place your hands in the center of the chest and press down firmly at a depth of about 2 inches, at a rate of 100–120 compressions per minute. Let the chest rise fully between compressions.',
                                'Compressions maintain blood flow to vital organs until the heart can pump effectively again.'
                            ]
                        },
                        {
                            stepNumber: 4,
                            title: 'Provide Rescue Breaths (If Trained)',
                            image: 'assets/images/Cardiac/cpr-step4.png',
                            description: [
                                'After 30 compressions, give 2 rescue breaths by tilting the head back, pinching the nose, and breathing into their mouth. Ensure the chest rises with each breath.',
                                'Rescue breaths deliver oxygen to the lungs, complementing chest compressions to sustain life.'
                            ]
                        },
                        {
                            stepNumber: 5,
                            title: 'Continue Until Help Arrives or Recovery',
                            image: 'assets/images/Cardiac/cpr-step5.png',
                            description: [
                                'Keep performing compressions and breaths without stopping unless the person regains consciousness, an AED advises you to stop, or professional help takes over.',
                                'Persistence can make the difference between life and death in these critical moments.'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'allergic-insect-bites',
            title: 'Allergic Reactions and Insect Bites',
            route: '/allergic-insect-bites',
            backgroundImage: 'assets/images/allergy/allergy1.png',
            headerImage: 'assets/images/allergy/allergy1.png',
            logoIcon: 'assets/images/allergy/allergy-logo.png',
            categoryIcon: 'assets/images/icon7.png',
            keyTakeawayTitle: 'Understanding the Basics',
            keyTakeawayDescription: 'Allergic reactions and insect bites, including snake bites, mild allergic responses, and insect stings, require swift action to prevent severe complications. Learn how to identify symptoms and provide immediate care for these potentially life-threatening situations.',
            techniques: [
                {
                    id: 'snake-bites',
                    title: 'Snake bites',
                    icon: 'assets/images/allergy/snake.png',
                    modalTitle: 'Snake Bites: First Aid Steps',
                    description: 'Follow these steps to manage snake bites safely, slow the spread of venom, and ensure prompt medical treatment. Acting quickly and calmly can make a critical difference in the outcome.',
                    steps: [
                        {
                            stepNumber: 1,
                            title: 'Keep the Person Calm and Still',
                            image: 'assets/images/allergy/snake-step1.png',
                            description: [
                                'Reassure the individual and encourage minimal movement to reduce the spread of venom through the bloodstream.',
                                'Panic and excessive movement can increase heart rate, speeding up venom circulation.'
                            ]
                        },
                        {
                            stepNumber: 2,
                            title: 'Immobilize the Limb and Keep It Below Heart Level',
                            image: 'assets/images/allergy/snake-step2.png',
                            description: [
                                'Gently immobilize the affected limb using a splint or by keeping it as still as possible.',
                                'Keeping the limb below heart level reduces the speed at which venom travels to vital organs.'
                            ]
                        },
                        {
                            stepNumber: 3,
                            title: 'Do Not Apply Ice or Suck Out Venom',
                            image: 'assets/images/allergy/snake-step3.png',
                            description: [
                                'Avoid using ice or cutting the wound, as these methods can worsen tissue damage.',
                                'Attempting to suck out venom is ineffective and can introduce infections.'
                            ]
                        },
                        {
                            stepNumber: 4,
                            title: 'Call Emergency Services Immediately',
                            image: 'assets/images/doctor.png',
                            description: [
                                'Contact professional medical help as quickly as possible for antivenom and advanced care.',
                                'Provide information about the snake\'s appearance if known, as this can assist medical staff in selecting the appropriate treatment.'
                            ]
                        }
                    ]
                },
                {
                    id: 'mild-allergic-reactions',
                    title: 'Mild allergic reactions',
                    icon: 'assets/images/allergy/allergy.png',
                    modalTitle: 'Mild Allergic Reactions: First Aid Steps',
                    description: 'Follow these steps to address mild allergic reactions promptly, alleviate symptoms, and prevent the reaction from escalating. Quick action can help ensure the person\'s comfort and safety.',
                    steps: [
                        {
                            stepNumber: 1,
                            title: 'Identify and Remove the Allergen',
                            image: 'assets/images/allergy/step1-all.png',
                            description: [
                                'Determine the source of the allergy (e.g., food, pollen, or insect sting) and eliminate further exposure if possible.',
                                'Removing the allergen helps stop the reaction from worsening or continuing.'
                            ]
                        },
                        {
                            stepNumber: 2,
                            title: 'Administer an Antihistamine',
                            image: 'assets/images/allergy/step2-all.png',
                            description: [
                                'Provide an over-the-counter antihistamine if available and the person has no known contraindications.',
                                'Antihistamines reduce itching, swelling, and other mild symptoms by blocking the allergic response.'
                            ]
                        },
                        {
                            stepNumber: 3,
                            title: 'Monitor for Worsening Symptoms',
                            image: 'assets/images/allergy/step3-all.png',
                            description: [
                                'Observe the person closely for any signs of the reaction becoming severe, such as difficulty breathing, swelling of the throat, or hives spreading rapidly.',
                                'If symptoms escalate, be prepared to call emergency services immediately.'
                            ]
                        }
                    ]
                },
                {
                    id: 'insect-stings',
                    title: 'Insect stings',
                    icon: 'assets/images/allergy/insect.png',
                    modalTitle: 'Insect Stings: First Aid Steps',
                    description: 'Follow these steps to safely treat insect stings, minimize discomfort, and prevent complications like infections or severe allergic reactions. Prompt care can help reduce pain and swelling effectively.',
                    steps: [
                        {
                            stepNumber: 1,
                            title: 'Remove the Stinger Safely',
                            image: 'assets/images/allergy/ins-step1.png',
                            description: [
                                'Gently scrape the stinger out using a card or your fingernail, avoiding squeezing the venom sac.',
                                'Proper removal prevents injecting more venom into the skin, reducing the severity of the reaction.'
                            ]
                        },
                        {
                            stepNumber: 2,
                            title: 'Clean the Area Thoroughly',
                            image: 'assets/images/allergy/ins-step2.png',
                            description: [
                                'Wash the sting site with soap and water to remove dirt and bacteria.',
                                'Cleaning minimizes the risk of infection, especially if the skin is broken.'
                            ]
                        },
                        {
                            stepNumber: 3,
                            title: 'Apply a Cold Compress',
                            image: 'assets/images/allergy/ins-step3.png',
                            description: [
                                'Place a cold compress or ice pack (wrapped in cloth) on the sting area to ease pain and reduce swelling.',
                                'Cooling the site helps numb the area and slow down the inflammatory response.'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'respiratory-emergencies',
            title: 'Respiratory Emergencies',
            route: '/respiratory-emergencies',
            backgroundImage: 'assets/images/Respiratory/Respiratory1.png',
            headerImage: 'assets/images/Respiratory/Respiratory1.png',
            logoIcon: 'assets/images/Respiratory/logo6.png',
            categoryIcon: 'assets/images/icon7.png',
            keyTakeawayTitle: 'Understanding the Basics',
            keyTakeawayDescription: 'Respiratory emergencies, like asthma attacks or choking, require prompt action. Learn the essential steps to handle these situations and save lives.',
            techniques: [
                {
                    id: 'choking-adults',
                    title: 'Choking for Adults',
                    icon: 'assets/images/Respiratory/adult.png',
                    modalTitle: 'Choking first aid for Adults',
                    description: 'Follow these simple and effective steps to respond to choking in adults, ensuring safety and timely action. By applying this techniques, you can increase the chance of successfully relieving the abstraction and preventing further complications.',
                    steps: [
                        {
                            stepNumber: 1,
                            title: 'Check if the Person Can Cough, Speak, or Breathe',
                            image: 'assets/images/Respiratory/step1-adult.png',
                            description: [
                                'If the person cannot cough, speak, or breathe, proceed with the Heimlich maneuver. If they can do any of these, encourage them to cough to clear the airway.'
                            ]
                        },
                        {
                            stepNumber: 2,
                            title: 'Stand Behind the Person and Wrap Your Arms Around Their Waist',
                            image: 'assets/images/Respiratory/step2-adult.png',
                            description: [
                                'Stand behind the choking person and wrap your arms around their waist for support.'
                            ]
                        },
                        {
                            stepNumber: 3,
                            title: 'Make a Fist and Position it Just Above the Belly Button',
                            image: 'assets/images/Respiratory/step3-adult.png',
                            description: [
                                'Make a fist with one hand and place it just above the person\'s belly button, at the center of their abdomen.'
                            ]
                        },
                        {
                            stepNumber: 4,
                            title: 'Grasp the Fist with the Other Hand and Perform Quick, Upward Thrusts',
                            image: 'assets/images/Respiratory/step4-adult.png',
                            description: [
                                'Grasp your fist with the other hand and deliver quick, upward thrusts. The motion should be sharp and forceful to expel the object blocking the airway.'
                            ]
                        },
                        {
                            stepNumber: 5,
                            title: 'Alternate with 5 Firm Back Blows If the Heimlich Maneuver Fails',
                            image: 'assets/images/Respiratory/step5-adult.png',
                            description: [
                                'If the Heimlich maneuver is unsuccessful, alternate with 5 firm back blows between the person\'s shoulder blades using the heel of your hand.'
                            ]
                        },
                        {
                            stepNumber: 6,
                            title: 'Repeat Until the Object is Expelled or the Person Becomes Unresponsive',
                            image: 'assets/images/Respiratory/step6-adult.png',
                            description: [
                                'Continue alternating between abdominal thrusts and back blows until the object is expelled or the person loses consciousness.'
                            ]
                        },
                        {
                            stepNumber: 7,
                            title: 'If Unresponsive, Begin CPR and Call Emergency Services',
                            image: 'assets/images/Respiratory/step7-adult.png',
                            description: [
                                'If the person becomes unresponsive, immediately begin CPR and call emergency services.'
                            ]
                        }
                    ]
                },
                {
                    id: 'choking-babies',
                    title: 'Choking For Babies',
                    icon: 'assets/images/Respiratory/child.png',
                    modalTitle: 'Choking first aid for Babies',
                    description: 'Follow these simple and effective steps to respond to choking in babies, ensuring their safety and well-being. By using gentle and appropriate techniques, you can help clear the abstraction and restore normal breathing.',
                    steps: [
                        {
                            stepNumber: 1,
                            title: 'Check if the Baby Can Cough, Cry, or Breathe',
                            image: 'assets/images/Respiratory/step1-choke.png',
                            description: [
                                'If the baby cannot make a sound or breathe, proceed immediately with first aid steps.'
                            ]
                        },
                        {
                            stepNumber: 2,
                            title: 'Position the Baby Face Down on Your Forearm',
                            image: 'assets/images/Respiratory/step2-choke.png',
                            description: [
                                'Place the baby face down along your forearm, with the head lower than the chest, supporting their head and neck.'
                            ]
                        },
                        {
                            stepNumber: 3,
                            title: 'Deliver 5 Back Blows',
                            image: 'assets/images/Respiratory/step3-choke.png',
                            description: [
                                'Using the heel of your hand, deliver 5 firm back blows between the baby\'s shoulder blades.'
                            ]
                        },
                        {
                            stepNumber: 4,
                            title: 'If Unsuccessful, Turn the Baby Face Up',
                            image: 'assets/images/Respiratory/step4-choke.png',
                            description: [
                                'If the back blows don\'t expel the object, turn the baby face up, supporting their head and neck.'
                            ]
                        },
                        {
                            stepNumber: 5,
                            title: 'Perform 5 Chest Thrusts',
                            image: 'assets/images/Respiratory/step5-choke.png',
                            description: [
                                'Place two fingers in the center of the baby\'s chest (just below the nipple line) and perform 5 quick chest thrusts.'
                            ]
                        },
                        {
                            stepNumber: 6,
                            title: 'Repeat Until the Object is Expelled or the Baby Becomes Unresponsive',
                            image: 'assets/images/Respiratory/step6-choke.png',
                            description: [
                                'Alternate between back blows and chest thrusts until the object is expelled or the baby becomes unresponsive.'
                            ]
                        },
                        {
                            stepNumber: 7,
                            title: 'If Unresponsive, Begin Infant CPR and Call Emergency Services',
                            image: 'assets/images/Respiratory/step7-choke.png',
                            description: [
                                'If the baby becomes unresponsive, begin infant CPR and call emergency services immediately.'
                            ]
                        }
                    ]
                },
                {
                    id: 'mild-asthma',
                    title: 'Mild Asthma Attack',
                    icon: 'assets/images/Respiratory/asthma.png',
                    modalTitle: 'Mild Asthma Attack: First Aid Steps',
                    description: 'Follow these steps to help manage a mild asthma attack, ease breathing difficulties, and prevent further complications. Immediate action can improve comfort and prevent worsening symptoms.',
                    steps: [
                        {
                            stepNumber: 1,
                            title: 'Help the Person Sit in a Comfortable Position',
                            image: 'assets/images/Respiratory/step1-ast.png',
                            description: [
                                'Have the person sit upright in a position that allows for easier breathing.',
                                'Encourage them to remain calm, as stress or panic can worsen the attack.'
                            ]
                        },
                        {
                            stepNumber: 2,
                            title: 'Assist with the Rescue Inhaler',
                            image: 'assets/images/Respiratory/step2-ast.png',
                            description: [
                                'If the person has a rescue inhaler, help them use it correctly. Usually, they need 2 puffs for relief.',
                                'Make sure they breathe in slowly and deeply after each puff to ensure the medication reaches the lungs.'
                            ]
                        },
                        {
                            stepNumber: 3,
                            title: 'Encourage Slow, Deep Breaths',
                            image: 'assets/images/Respiratory/step3-ast.png',
                            description: [
                                'Guide the person to take slow, deep breaths to help open the airways and calm their breathing.',
                                'This can reduce feelings of breathlessness and prevent rapid breathing from intensifying the attack.'
                            ]
                        },
                        {
                            stepNumber: 4,
                            title: 'Monitor for Improvement',
                            image: 'assets/images/Respiratory/step4-ast.png',
                            description: [
                                'After using the inhaler, monitor the person\'s condition. If their breathing improves and they feel better, continue to observe them.',
                                'If there\'s no relief after 5 minutes, or if symptoms worsen, call emergency services immediately for further assistance.'
                            ]
                        }
                    ]
                },
                {
                    id: 'hyperventilation',
                    title: 'Hyperventilation',
                    icon: 'assets/images/Respiratory/hyperventilation.png',
                    modalTitle: 'Hyperventilation: First Aid Steps',
                    description: 'Follow these steps to help manage hyperventilation, reduce anxiety, and restore normal breathing patterns. Quick action can help the person regain control and prevent complications.',
                    steps: [
                        {
                            stepNumber: 1,
                            title: 'Encourage the Person to Sit Down and Relax',
                            image: 'assets/images/Respiratory/step1-hy.png',
                            description: [
                                'Have the person sit in a comfortable position to avoid fainting or worsening symptoms.',
                                'Encourage them to relax and focus on their breathing.'
                            ]
                        },
                        {
                            stepNumber: 2,
                            title: 'Guide Them to Breathe Slowly and Calmly',
                            image: 'assets/images/Respiratory/step2-hy.png',
                            description: [
                                'Instruct the person to breathe slowly through their nose and exhale gently through pursed lips, like blowing through a straw.',
                                'This technique helps slow down rapid breathing and restore normal oxygen levels.'
                            ]
                        },
                        {
                            stepNumber: 3,
                            title: 'Reassure and Stay Calm',
                            image: 'assets/images/Respiratory/step3-hy.png',
                            description: [
                                'Offer reassurance and stay calm to help reduce anxiety.',
                                'Anxiety can worsen hyperventilation, so maintaining a calm environment is crucial.'
                            ]
                        },
                        {
                            stepNumber: 4,
                            title: 'Seek Medical Advice if Symptoms Persist',
                            image: 'assets/images/doctor.png',
                            description: [
                                'If the person continues to hyperventilate or exhibits signs of distress (e.g., dizziness, confusion), seek professional medical help.',
                                'Persistent hyperventilation may require further evaluation and treatment.'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'traumatic-injuries',
            title: 'Traumatic Injuries',
            route: '/traumatic-injuries',
            backgroundImage: 'assets/images/Traumatic/bruises1.png',
            headerImage: 'assets/images/Traumatic/bruises1.png',
            logoIcon: 'assets/images/Traumatic/traumatic-logo.png',
            categoryIcon: 'assets/images/icon7.png',
            keyTakeawayTitle: 'Understanding the Basics',
            keyTakeawayDescription: 'Traumatic injuries, such as minor bleeding, sprains, mild burns, and bruises, require timely and proper care. Learn the essential steps to manage these injuries effectively and prevent further harm.',
            techniques: [
                {
                    id: 'minor-bleeding',
                    title: 'Minor Bleeding or Cuts',
                    icon: 'assets/images/Traumatic/bleeding.png',
                    modalTitle: 'First Aid for Minor Cuts and Wounds',
                    description: 'Follow these simple and effective steps to properly care for minor cuts or wounds, ensuring cleanliness, safety, and faster healing. By taking these precautions, you can minimize the risk of infection, promote proper recovery, and protect the injured area for optimal healing outcomes.',
                    steps: [
                        {
                            stepNumber: 1,
                            title: 'Prepare Yourself',
                            image: 'assets/images/Traumatic/step1.png',
                            description: [
                                'Wash your hands thoroughly with soap and water.',
                                'If available, wear disposable gloves to prevent contamination.'
                            ]
                        },
                        {
                            stepNumber: 2,
                            title: 'Stop the Bleeding',
                            image: 'assets/images/Traumatic/step2.png',
                            description: [
                                'Gently apply firm pressure to the wound using a clean cloth or gauze.',
                                'Hold the pressure until the bleeding stops (usually within a few minutes).'
                            ]
                        },
                        {
                            stepNumber: 3,
                            title: 'Clean the Wound',
                            image: 'assets/images/Traumatic/step3.png',
                            description: [
                                'Rinse the wound gently under clean, running water to remove dirt or debris.',
                                'Avoid using hydrogen peroxide or alcohol directly on the wound, as these can delay healing.'
                            ]
                        },
                        {
                            stepNumber: 4,
                            title: 'Apply Antiseptic and Cover',
                            image: 'assets/images/Traumatic/step4.png',
                            description: [
                                'Dab the wound dry with a clean cloth.',
                                'Apply an antiseptic or antibiotic ointment.',
                                'Cover the wound with a sterile bandage or dressing to keep it protected.'
                            ]
                        },
                        {
                            stepNumber: 5,
                            title: 'Monitor for Infection',
                            image: 'assets/images/Traumatic/step5.png',
                            description: [
                                'Watch the wound over the next few days for signs of infection, such as redness, swelling, pus, or increased pain.',
                                'If symptoms worsen, seek medical advice promptly.'
                            ]
                        }
                    ]
                },
                {
                    id: 'sprains',
                    title: 'Sprains and Minor Fractures',
                    icon: 'assets/images/Traumatic/injury.png',
                    modalTitle: 'Sprains and Minor Fractures: First Aid Steps',
                    description: 'Follow these steps to safely manage sprains and minor fractures while minimizing pain, reducing swelling, and preventing further injury. These measures will help stabilize the affected area and provide initial relief until professional medical care is available if needed.',
                    steps: [
                        {
                            stepNumber: 1,
                            title: 'Immobilize the Area',
                            image: 'assets/images/Traumatic/sprain-step1.png',
                            description: [
                                'Keep the injured part as still as possible.',
                                'Use a splint or any sturdy support to stabilize the affected area.'
                            ]
                        },
                        {
                            stepNumber: 2,
                            title: 'Apply Cold Therapy',
                            image: 'assets/images/Traumatic/sprain-step2.png',
                            description: [
                                'Place an ice pack wrapped in a cloth or towel on the injury.',
                                'Apply for 15 to 20 minutes at a time to reduce pain and swelling.',
                                'Avoid placing ice directly on the skin to prevent frostbite.'
                            ]
                        },
                        {
                            stepNumber: 3,
                            title: 'Elevate the Limb',
                            image: 'assets/images/Traumatic/sprain-step3.png',
                            description: [
                                'If feasible, raise the injured limb above heart level.',
                                'This helps decrease swelling and promotes blood flow.'
                            ]
                        },
                        {
                            stepNumber: 4,
                            title: 'Avoid Strain and Seek Professional Help',
                            image: 'assets/images/Traumatic/sprain-step4.png',
                            description: [
                                'Do not put any weight or pressure on the injured area.',
                                'If severe pain, deformity, or inability to move the limb persists, seek immediate medical attention.'
                            ]
                        }
                    ]
                },
                {
                    id: 'burns',
                    title: 'Mild Burns',
                    icon: 'assets/images/Traumatic/burns.png',
                    modalTitle: 'Mild Burns: First Aid Steps',
                    description: 'Follow these steps to safely treat mild burns, ensuring immediate pain relief, protecting the affected area, and promoting faster healing. Acting promptly can prevent further skin damage and reduce the risk of infection.',
                    steps: [
                        {
                            stepNumber: 1,
                            title: 'Cool the Burn',
                            image: 'assets/images/Traumatic/burns-step1.png',
                            description: [
                                'Place the affected area under cool, running water for 10–15 minutes.',
                                'Avoid using icy water, as it can cause further tissue damage.'
                            ]
                        },
                        {
                            stepNumber: 2,
                            title: 'Protect the Skin',
                            image: 'assets/images/Traumatic/burns-step2.png',
                            description: [
                                'Do not break any blisters, as they act as a natural barrier against infection.'
                            ]
                        },
                        {
                            stepNumber: 3,
                            title: 'Cover the Burn',
                            image: 'assets/images/Traumatic/burns-step3.png',
                            description: [
                                'Use a non-stick sterile bandage or clean cloth to lightly cover the burn.',
                                'Avoid using fluffy cotton or materials that might stick to the wound.'
                            ]
                        },
                        {
                            stepNumber: 4,
                            title: 'Seek Medical Attention If Necessary',
                            image: 'assets/images/Traumatic/step5.png',
                            description: [
                                'If the burn is larger than the size of a palm, or if it occurs in a sensitive area like the face, hands, or joints, consult a healthcare professional promptly.'
                            ]
                        }
                    ]
                },
                {
                    id: 'bruises',
                    title: 'Bruises',
                    icon: 'assets/images/Traumatic/bruises.png',
                    modalTitle: 'Bruises: First Aid Steps',
                    description: 'Follow these simple steps to help reduce swelling, ease discomfort, and promote healing for bruises. Timely care can minimize the severity of the bruise, promote faster recovery, and prevent complications such as prolonged pain or increased swelling.',
                    steps: [
                        {
                            stepNumber: 1,
                            title: 'Apply Cold Compress',
                            image: 'assets/images/Traumatic/bruises-step1.png',
                            description: [
                                'Place a cold compress or ice pack wrapped in a cloth on the bruised area to reduce swelling.',
                                'Apply for 15–20 minutes at a time, taking breaks to prevent skin damage.'
                            ]
                        },
                        {
                            stepNumber: 2,
                            title: 'Elevate the Area',
                            image: 'assets/images/Traumatic/bruises-step2.png',
                            description: [
                                'If possible, raise the bruised area above heart level to minimize swelling and encourage proper blood flow.'
                            ]
                        },
                        {
                            stepNumber: 3,
                            title: 'Rest and Monitor',
                            image: 'assets/images/Traumatic/step5.png',
                            description: [
                                'Avoid putting pressure or strain on the injured area.',
                                'Rest and keep an eye on the bruise for any changes, such as increased pain or discoloration.',
                                'If symptoms worsen, seek medical advice.'
                            ]
                        }
                    ]
                }
            ]
        }
    ];

    getAllCategories(): EmergencyCategory[] {
        return this.categories;
    }

    getCategoryById(id: string): EmergencyCategory | undefined {
        return this.categories.find(cat => cat.id === id);
    }

    getCategoryByRoute(route: string): EmergencyCategory | undefined {
        return this.categories.find(cat => cat.route === route);
    }

    getTechniqueById(categoryId: string, techniqueId: string): FirstAidTechnique | undefined {
        const category = this.getCategoryById(categoryId);
        return category?.techniques.find(tech => tech.id === techniqueId);
    }

    searchTechniques(query: string): FirstAidTechnique[] {
        if (!query.trim()) {
            return [];
        }

        const results: FirstAidTechnique[] = [];
        const lowerQuery = query.toLowerCase();

        this.categories.forEach(category => {
            category.techniques.forEach(technique => {
                if (technique.title.toLowerCase().includes(lowerQuery)) {
                    results.push(technique);
                }
            });
        });

        return results;
    }
}