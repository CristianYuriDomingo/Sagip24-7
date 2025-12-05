// src/app/tabs/tabs.page.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { TranslationService } from '../services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, OnDestroy {
  currentLanguage: string = 'en';
  translations: any = {};
  private languageSubscription?: Subscription;
  private translationSubscription?: Subscription;

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    // Subscribe to language changes
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      language => {
        this.currentLanguage = language;
      }
    );

    // Subscribe to translation changes
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
}