// services/first-aid.service.ts - Complete with i18n support
import { Injectable } from '@angular/core';
import { EmergencyCategory, FirstAidTechnique } from '../models/first-aid-technique.model';
import { TranslationService } from './translation.service';

@Injectable({
    providedIn: 'root'
})
export class FirstAidService {
    private categoryConfigs = [
        {
            id: 'respiratory-emergencies',
            titleKey: 'CATEGORIES.RESPIRATORY.TITLE',
            keyTakeawayTitleKey: 'CATEGORIES.RESPIRATORY.KEY_TAKEAWAY_TITLE',
            keyTakeawayDescKey: 'CATEGORIES.RESPIRATORY.KEY_TAKEAWAY_DESC',
            route: '/respiratory-emergencies',
            backgroundImage: 'assets/images/Respiratory/Respiratory1.png',
            headerImage: 'assets/images/Respiratory/Respiratory1.png',
            logoIcon: 'assets/images/Respiratory/logo6.png',
            categoryIcon: 'assets/images/icon7.png',
            techniques: [
                {
                    id: 'choking-adults',
                    titleKey: 'CATEGORIES.RESPIRATORY.TECHNIQUES.CHOKING_ADULTS.TITLE',
                    modalTitleKey: 'CATEGORIES.RESPIRATORY.TECHNIQUES.CHOKING_ADULTS.MODAL_TITLE',
                    descriptionKey: 'CATEGORIES.RESPIRATORY.TECHNIQUES.CHOKING_ADULTS.DESCRIPTION',
                    icon: 'assets/images/Respiratory/adult.png',
                    stepsKey: 'CATEGORIES.RESPIRATORY.TECHNIQUES.CHOKING_ADULTS.STEPS'
                },
                {
                    id: 'choking-babies',
                    titleKey: 'CATEGORIES.RESPIRATORY.TECHNIQUES.CHOKING_BABIES.TITLE',
                    modalTitleKey: 'CATEGORIES.RESPIRATORY.TECHNIQUES.CHOKING_BABIES.MODAL_TITLE',
                    descriptionKey: 'CATEGORIES.RESPIRATORY.TECHNIQUES.CHOKING_BABIES.DESCRIPTION',
                    icon: 'assets/images/Respiratory/child.png',
                    stepsKey: 'CATEGORIES.RESPIRATORY.TECHNIQUES.CHOKING_BABIES.STEPS'
                },
                {
                    id: 'mild-asthma',
                    titleKey: 'CATEGORIES.RESPIRATORY.TECHNIQUES.MILD_ASTHMA.TITLE',
                    modalTitleKey: 'CATEGORIES.RESPIRATORY.TECHNIQUES.MILD_ASTHMA.MODAL_TITLE',
                    descriptionKey: 'CATEGORIES.RESPIRATORY.TECHNIQUES.MILD_ASTHMA.DESCRIPTION',
                    icon: 'assets/images/Respiratory/asthma.png',
                    stepsKey: 'CATEGORIES.RESPIRATORY.TECHNIQUES.MILD_ASTHMA.STEPS'
                },
                {
                    id: 'hyperventilation',
                    titleKey: 'CATEGORIES.RESPIRATORY.TECHNIQUES.HYPERVENTILATION.TITLE',
                    modalTitleKey: 'CATEGORIES.RESPIRATORY.TECHNIQUES.HYPERVENTILATION.MODAL_TITLE',
                    descriptionKey: 'CATEGORIES.RESPIRATORY.TECHNIQUES.HYPERVENTILATION.DESCRIPTION',
                    icon: 'assets/images/Respiratory/hyperventilation.png',
                    stepsKey: 'CATEGORIES.RESPIRATORY.TECHNIQUES.HYPERVENTILATION.STEPS'
                }
            ]
        },
        {
            id: 'traumatic-injuries',
            titleKey: 'CATEGORIES.TRAUMATIC.TITLE',
            keyTakeawayTitleKey: 'CATEGORIES.TRAUMATIC.KEY_TAKEAWAY_TITLE',
            keyTakeawayDescKey: 'CATEGORIES.TRAUMATIC.KEY_TAKEAWAY_DESC',
            route: '/traumatic-injuries',
            backgroundImage: 'assets/images/Traumatic/bruises1.png',
            headerImage: 'assets/images/Traumatic/bruises1.png',
            logoIcon: 'assets/images/Traumatic/traumatic-logo.png',
            categoryIcon: 'assets/images/icon7.png',
            techniques: [
                {
                    id: 'minor-bleeding',
                    titleKey: 'CATEGORIES.TRAUMATIC.TECHNIQUES.MINOR_BLEEDING.TITLE',
                    modalTitleKey: 'CATEGORIES.TRAUMATIC.TECHNIQUES.MINOR_BLEEDING.MODAL_TITLE',
                    descriptionKey: 'CATEGORIES.TRAUMATIC.TECHNIQUES.MINOR_BLEEDING.DESCRIPTION',
                    icon: 'assets/images/Traumatic/bleeding.png',
                    stepsKey: 'CATEGORIES.TRAUMATIC.TECHNIQUES.MINOR_BLEEDING.STEPS'
                },
                {
                    id: 'sprains',
                    titleKey: 'CATEGORIES.TRAUMATIC.TECHNIQUES.SPRAINS.TITLE',
                    modalTitleKey: 'CATEGORIES.TRAUMATIC.TECHNIQUES.SPRAINS.MODAL_TITLE',
                    descriptionKey: 'CATEGORIES.TRAUMATIC.TECHNIQUES.SPRAINS.DESCRIPTION',
                    icon: 'assets/images/Traumatic/injury.png',
                    stepsKey: 'CATEGORIES.TRAUMATIC.TECHNIQUES.SPRAINS.STEPS'
                },
                {
                    id: 'burns',
                    titleKey: 'CATEGORIES.TRAUMATIC.TECHNIQUES.BURNS.TITLE',
                    modalTitleKey: 'CATEGORIES.TRAUMATIC.TECHNIQUES.BURNS.MODAL_TITLE',
                    descriptionKey: 'CATEGORIES.TRAUMATIC.TECHNIQUES.BURNS.DESCRIPTION',
                    icon: 'assets/images/Traumatic/burns.png',
                    stepsKey: 'CATEGORIES.TRAUMATIC.TECHNIQUES.BURNS.STEPS'
                },
                {
                    id: 'bruises',
                    titleKey: 'CATEGORIES.TRAUMATIC.TECHNIQUES.BRUISES.TITLE',
                    modalTitleKey: 'CATEGORIES.TRAUMATIC.TECHNIQUES.BRUISES.MODAL_TITLE',
                    descriptionKey: 'CATEGORIES.TRAUMATIC.TECHNIQUES.BRUISES.DESCRIPTION',
                    icon: 'assets/images/Traumatic/bruises.png',
                    stepsKey: 'CATEGORIES.TRAUMATIC.TECHNIQUES.BRUISES.STEPS'
                }
            ]
        },
        {
            id: 'environmental',
            titleKey: 'CATEGORIES.ENVIRONMENTAL.TITLE',
            keyTakeawayTitleKey: 'CATEGORIES.ENVIRONMENTAL.KEY_TAKEAWAY_TITLE',
            keyTakeawayDescKey: 'CATEGORIES.ENVIRONMENTAL.KEY_TAKEAWAY_DESC',
            route: '/environmental-emergencies',
            backgroundImage: 'assets/images/Environmental/dehydration1.png',
            headerImage: 'assets/images/Environmental/dehydration1.png',
            logoIcon: 'assets/images/Environmental/environmental-logo.png',
            categoryIcon: 'assets/images/icon7.png',
            techniques: [
                {
                    id: 'heat-exhaustion',
                    titleKey: 'CATEGORIES.ENVIRONMENTAL.TECHNIQUES.HEAT_EXHAUSTION.TITLE',
                    modalTitleKey: 'CATEGORIES.ENVIRONMENTAL.TECHNIQUES.HEAT_EXHAUSTION.MODAL_TITLE',
                    descriptionKey: 'CATEGORIES.ENVIRONMENTAL.TECHNIQUES.HEAT_EXHAUSTION.DESCRIPTION',
                    icon: 'assets/images/Environmental/heat.png',
                    stepsKey: 'CATEGORIES.ENVIRONMENTAL.TECHNIQUES.HEAT_EXHAUSTION.STEPS'
                },
                {
                    id: 'mild-hypothermia',
                    titleKey: 'CATEGORIES.ENVIRONMENTAL.TECHNIQUES.MILD_HYPOTHERMIA.TITLE',
                    modalTitleKey: 'CATEGORIES.ENVIRONMENTAL.TECHNIQUES.MILD_HYPOTHERMIA.MODAL_TITLE',
                    descriptionKey: 'CATEGORIES.ENVIRONMENTAL.TECHNIQUES.MILD_HYPOTHERMIA.DESCRIPTION',
                    icon: 'assets/images/Environmental/hypotermia.png',
                    stepsKey: 'CATEGORIES.ENVIRONMENTAL.TECHNIQUES.MILD_HYPOTHERMIA.STEPS'
                },
                {
                    id: 'dehydration',
                    titleKey: 'CATEGORIES.ENVIRONMENTAL.TECHNIQUES.DEHYDRATION.TITLE',
                    modalTitleKey: 'CATEGORIES.ENVIRONMENTAL.TECHNIQUES.DEHYDRATION.MODAL_TITLE',
                    descriptionKey: 'CATEGORIES.ENVIRONMENTAL.TECHNIQUES.DEHYDRATION.DESCRIPTION',
                    icon: 'assets/images/Environmental/dehydration.png',
                    stepsKey: 'CATEGORIES.ENVIRONMENTAL.TECHNIQUES.DEHYDRATION.STEPS'
                }
            ]
        },
        {
            id: 'allergic-insect-bites',
            titleKey: 'CATEGORIES.ALLERGIC.TITLE',
            keyTakeawayTitleKey: 'CATEGORIES.ALLERGIC.KEY_TAKEAWAY_TITLE',
            keyTakeawayDescKey: 'CATEGORIES.ALLERGIC.KEY_TAKEAWAY_DESC',
            route: '/allergic-insect-bites',
            backgroundImage: 'assets/images/allergy/allergy1.png',
            headerImage: 'assets/images/allergy/allergy1.png',
            logoIcon: 'assets/images/allergy/allergy-logo.png',
            categoryIcon: 'assets/images/icon7.png',
            techniques: [
                {
                    id: 'snake-bites',
                    titleKey: 'CATEGORIES.ALLERGIC.TECHNIQUES.SNAKE_BITES.TITLE',
                    modalTitleKey: 'CATEGORIES.ALLERGIC.TECHNIQUES.SNAKE_BITES.MODAL_TITLE',
                    descriptionKey: 'CATEGORIES.ALLERGIC.TECHNIQUES.SNAKE_BITES.DESCRIPTION',
                    icon: 'assets/images/allergy/snake.png',
                    stepsKey: 'CATEGORIES.ALLERGIC.TECHNIQUES.SNAKE_BITES.STEPS'
                },
                {
                    id: 'mild-allergic-reactions',
                    titleKey: 'CATEGORIES.ALLERGIC.TECHNIQUES.MILD_ALLERGIC.TITLE',
                    modalTitleKey: 'CATEGORIES.ALLERGIC.TECHNIQUES.MILD_ALLERGIC.MODAL_TITLE',
                    descriptionKey: 'CATEGORIES.ALLERGIC.TECHNIQUES.MILD_ALLERGIC.DESCRIPTION',
                    icon: 'assets/images/allergy/allergy.png',
                    stepsKey: 'CATEGORIES.ALLERGIC.TECHNIQUES.MILD_ALLERGIC.STEPS'
                },
                {
                    id: 'insect-stings',
                    titleKey: 'CATEGORIES.ALLERGIC.TECHNIQUES.INSECT_STINGS.TITLE',
                    modalTitleKey: 'CATEGORIES.ALLERGIC.TECHNIQUES.INSECT_STINGS.MODAL_TITLE',
                    descriptionKey: 'CATEGORIES.ALLERGIC.TECHNIQUES.INSECT_STINGS.DESCRIPTION',
                    icon: 'assets/images/allergy/insect.png',
                    stepsKey: 'CATEGORIES.ALLERGIC.TECHNIQUES.INSECT_STINGS.STEPS'
                }
            ]
        },
        {
            id: 'cardiac-neurological',
            titleKey: 'CATEGORIES.CARDIAC.TITLE',
            keyTakeawayTitleKey: 'CATEGORIES.CARDIAC.KEY_TAKEAWAY_TITLE',
            keyTakeawayDescKey: 'CATEGORIES.CARDIAC.KEY_TAKEAWAY_DESC',
            route: '/cardiac-neurological',
            backgroundImage: 'assets/images/Cardiac/neurology1.png',
            headerImage: 'assets/images/Cardiac/neurology1.png',
            logoIcon: 'assets/images/Cardiac/cardiac-logo.png',
            categoryIcon: 'assets/images/icon7.png',
            techniques: [
                {
                    id: 'fainting',
                    titleKey: 'CATEGORIES.CARDIAC.TECHNIQUES.FAINTING.TITLE',
                    modalTitleKey: 'CATEGORIES.CARDIAC.TECHNIQUES.FAINTING.MODAL_TITLE',
                    descriptionKey: 'CATEGORIES.CARDIAC.TECHNIQUES.FAINTING.DESCRIPTION',
                    icon: 'assets/images/Cardiac/fainting.png',
                    stepsKey: 'CATEGORIES.CARDIAC.TECHNIQUES.FAINTING.STEPS'
                },
                {
                    id: 'cpr',
                    titleKey: 'CATEGORIES.CARDIAC.TECHNIQUES.CPR.TITLE',
                    modalTitleKey: 'CATEGORIES.CARDIAC.TECHNIQUES.CPR.MODAL_TITLE',
                    descriptionKey: 'CATEGORIES.CARDIAC.TECHNIQUES.CPR.DESCRIPTION',
                    icon: 'assets/images/Cardiac/cpr.png',
                    stepsKey: 'CATEGORIES.CARDIAC.TECHNIQUES.CPR.STEPS'
                }
            ]
        },
        {
            id: 'other-general-emergencies',
            titleKey: 'CATEGORIES.OTHER.TITLE',
            keyTakeawayTitleKey: 'CATEGORIES.OTHER.KEY_TAKEAWAY_TITLE',
            keyTakeawayDescKey: 'CATEGORIES.OTHER.KEY_TAKEAWAY_DESC',
            route: '/other-general-emergencies',
            backgroundImage: 'assets/images/Other-Emergency/Other1.png',
            headerImage: 'assets/images/Other-Emergency/Other1.png',
            logoIcon: 'assets/images/Other-Emergency/other.png',
            categoryIcon: 'assets/images/icon7.png',
            techniques: [
                {
                    id: 'nosebleeds',
                    titleKey: 'CATEGORIES.OTHER.TECHNIQUES.NOSEBLEEDS.TITLE',
                    modalTitleKey: 'CATEGORIES.OTHER.TECHNIQUES.NOSEBLEEDS.MODAL_TITLE',
                    descriptionKey: 'CATEGORIES.OTHER.TECHNIQUES.NOSEBLEEDS.DESCRIPTION',
                    icon: 'assets/images/Other-Emergency/nosebleed.png',
                    stepsKey: 'CATEGORIES.OTHER.TECHNIQUES.NOSEBLEEDS.STEPS'
                },
                {
                    id: 'eye-injury',
                    titleKey: 'CATEGORIES.OTHER.TECHNIQUES.EYE_INJURY.TITLE',
                    modalTitleKey: 'CATEGORIES.OTHER.TECHNIQUES.EYE_INJURY.MODAL_TITLE',
                    descriptionKey: 'CATEGORIES.OTHER.TECHNIQUES.EYE_INJURY.DESCRIPTION',
                    icon: 'assets/images/Other-Emergency/injuries.png',
                    stepsKey: 'CATEGORIES.OTHER.TECHNIQUES.EYE_INJURY.STEPS'
                },
                {
                    id: 'foreign-object',
                    titleKey: 'CATEGORIES.OTHER.TECHNIQUES.FOREIGN_OBJECT.TITLE',
                    modalTitleKey: 'CATEGORIES.OTHER.TECHNIQUES.FOREIGN_OBJECT.MODAL_TITLE',
                    descriptionKey: 'CATEGORIES.OTHER.TECHNIQUES.FOREIGN_OBJECT.DESCRIPTION',
                    icon: 'assets/images/Other-Emergency/cube.png',
                    stepsKey: 'CATEGORIES.OTHER.TECHNIQUES.FOREIGN_OBJECT.STEPS'
                }
            ]
        }
    ];

    constructor(private translationService: TranslationService) {}

    /**
     * Get all categories with translated content
     */
    getAllCategories(): EmergencyCategory[] {
        return this.categoryConfigs.map(config => this.buildCategory(config));
    }

    /**
     * Get a specific category by ID with translated content
     */
    getCategoryById(id: string): EmergencyCategory | undefined {
        const config = this.categoryConfigs.find(cat => cat.id === id);
        return config ? this.buildCategory(config) : undefined;
    }

    /**
     * Get a specific category by route with translated content
     */
    getCategoryByRoute(route: string): EmergencyCategory | undefined {
        const config = this.categoryConfigs.find(cat => cat.route === route);
        return config ? this.buildCategory(config) : undefined;
    }

    /**
     * Get a specific technique by category ID and technique ID
     */
    getTechniqueById(categoryId: string, techniqueId: string): FirstAidTechnique | undefined {
        const category = this.getCategoryById(categoryId);
        return category?.techniques.find(tech => tech.id === techniqueId);
    }

    /**
     * Get all techniques from all categories
     */
    getAllTechniques(): FirstAidTechnique[] {
        const allTechniques: FirstAidTechnique[] = [];
        const categories = this.getAllCategories();
        
        categories.forEach(category => {
            allTechniques.push(...category.techniques);
        });
        
        return allTechniques;
    }

    /**
     * Search techniques across all categories
     * Returns techniques with their parent category info
     */
    searchTechniques(query: string): { technique: FirstAidTechnique, category: EmergencyCategory }[] {
        if (!query.trim()) {
            return [];
        }

        const results: { technique: FirstAidTechnique, category: EmergencyCategory }[] = [];
        const lowerQuery = query.toLowerCase();
        const categories = this.getAllCategories();

        categories.forEach(category => {
            category.techniques.forEach(technique => {
                if (technique.title.toLowerCase().includes(lowerQuery)) {
                    results.push({ technique, category });
                }
            });
        });

        return results;
    }

    /**
     * Search techniques within a specific category
     */
    searchTechniquesInCategory(categoryId: string, query: string): FirstAidTechnique[] {
        if (!query.trim()) {
            return [];
        }

        const category = this.getCategoryById(categoryId);
        if (!category) {
            return [];
        }

        const lowerQuery = query.toLowerCase();
        return category.techniques.filter(technique => 
            technique.title.toLowerCase().includes(lowerQuery)
        );
    }

    /**
     * Get techniques by category ID
     */
    getTechniquesByCategoryId(categoryId: string): FirstAidTechnique[] {
        const category = this.getCategoryById(categoryId);
        return category ? category.techniques : [];
    }

    /**
     * Get techniques by category route
     */
    getTechniquesByCategoryRoute(route: string): FirstAidTechnique[] {
        const category = this.getCategoryByRoute(route);
        return category ? category.techniques : [];
    }

    /**
     * Build a complete EmergencyCategory object with translated content
     */
    private buildCategory(config: any): EmergencyCategory {
        return {
            id: config.id,
            title: this.translationService.get(config.titleKey),
            route: config.route,
            backgroundImage: config.backgroundImage,
            headerImage: config.headerImage,
            logoIcon: config.logoIcon,
            categoryIcon: config.categoryIcon,
            keyTakeawayTitle: this.translationService.get(config.keyTakeawayTitleKey),
            keyTakeawayDescription: this.translationService.get(config.keyTakeawayDescKey),
            techniques: config.techniques.map((tech: any) => this.buildTechnique(tech))
        };
    }

    /**
     * Build a complete FirstAidTechnique object with translated content
     */
    private buildTechnique(config: any): FirstAidTechnique {
        const steps = this.translationService.get(config.stepsKey) || [];
        
        return {
            id: config.id,
            title: this.translationService.get(config.titleKey),
            icon: config.icon,
            modalTitle: this.translationService.get(config.modalTitleKey),
            description: this.translationService.get(config.descriptionKey),
            steps: Array.isArray(steps) ? steps.map((step: any, index: number) => ({
                stepNumber: index + 1,
                title: step.title || '',
                image: step.image || '',
                description: Array.isArray(step.description) ? step.description : []
            })) : []
        };
    }
}