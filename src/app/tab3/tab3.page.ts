// src/app/tab3/tab3.page.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { LanguagePopoverComponent } from '../components/language-popover/language-popover.component';
import { LanguageService } from '../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit, OnDestroy {
  currentLanguage: string = 'en';
  private languageSubscription?: Subscription;

  constructor(
    private popoverController: PopoverController,
    private alertController: AlertController,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    // Subscribe to language changes
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      language => {
        this.currentLanguage = language;
      }
    );
  }

  ngOnDestroy() {
    // Clean up subscription
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
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
    const isFilipino = this.currentLanguage === 'fil';
    const languageName = this.languageService.getLanguageDisplayName(newLanguage);
    
    const alertConfig = isFilipino ? {
      header: 'Magpalit ng Wika',
      message: `Gusto mo bang magpalit sa ${languageName}?`,
      cancelText: 'Kanselahin',
      confirmText: 'Magpalit'
    } : {
      header: 'Switch Language',
      message: `Do you want to switch to ${languageName}?`,
      cancelText: 'Cancel',
      confirmText: 'Switch'
    };
    
    const alert = await this.alertController.create({
      header: alertConfig.header,
      message: alertConfig.message,
      buttons: [
        {
          text: alertConfig.cancelText,
          role: 'cancel'
        },
        {
          text: alertConfig.confirmText,
          handler: () => {
            // Use the service to switch language (will notify all tabs)
            this.languageService.setLanguage(newLanguage);
          }
        }
      ]
    });

    await alert.present();
  }
}