// ==========================================
// src/app/tab3/tab3.page.ts - COMPLETE CODE
// ==========================================

import { Component, OnInit, OnDestroy } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { LanguagePopoverComponent } from '../components/language-popover/language-popover.component';
import { LanguageService } from '../services/language.service';
import { TranslationService } from '../services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit, OnDestroy {
  currentLanguage: string = 'en';
  translations: any = {};
  private languageSubscription?: Subscription;
  private translationSubscription?: Subscription;

  constructor(
    private popoverController: PopoverController,
    private alertController: AlertController,
    private languageService: LanguageService,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      language => {
        this.currentLanguage = language;
      }
    );

    this.translationSubscription = this.translationService.currentTranslations$.subscribe(
      translations => {
        this.translations = translations;
      }
    );
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
  }

  async presentLanguagePopover(event: any) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverComponent,
      event: event,
      translucent: true,
      cssClass: 'language-popover'
    });

    await popover.present();

    const { data } = await popover.onDidDismiss();
    
    if (data && data.language && data.language !== this.currentLanguage) {
      this.showLanguageChangeConfirmation(data.language);
    }
  }

  async showLanguageChangeConfirmation(newLanguage: string) {
    const languageName = this.languageService.getLanguageDisplayName(newLanguage);
    const message = this.translationService.translate(
      'LANGUAGE_SWITCHER.SWITCH_MESSAGE', 
      { language: languageName }
    );
    
    const alert = await this.alertController.create({
      header: this.translations.LANGUAGE_SWITCHER?.SWITCH_HEADER || 'Switch Language',
      message: message,
      buttons: [
        {
          text: this.translations.LANGUAGE_SWITCHER?.CANCEL || 'Cancel',
          role: 'cancel'
        },
        {
          text: this.translations.LANGUAGE_SWITCHER?.SWITCH || 'Switch',
          handler: () => {
            this.languageService.setLanguage(newLanguage);
          }
        }
      ]
    });

    await alert.present();
  }
}