// src/app/services/translation.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import enTranslations from '../../assets/i18n/en.json';
import filTranslations from '../../assets/i18n/fil.json';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: any = {
    en: enTranslations,
    fil: filTranslations
  };

  private currentTranslationsSubject: BehaviorSubject<any>;
  public currentTranslations$: Observable<any>;

  constructor() {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    this.currentTranslationsSubject = new BehaviorSubject<any>(
      this.translations[savedLanguage]
    );
    this.currentTranslations$ = this.currentTranslationsSubject.asObservable();
  }

  /**
   * Update translations when language changes
   */
  setLanguage(language: string): void {
    if (this.translations[language]) {
      this.currentTranslationsSubject.next(this.translations[language]);
    }
  }

  /**
   * Get current translations
   */
  getCurrentTranslations(): any {
    return this.currentTranslationsSubject.value;
  }

  /**
   * Get translation by key path (e.g., 'TAB1.EMERGENCY_CONTACT')
   */
  get(keyPath: string): string {
    const keys = keyPath.split('.');
    let value = this.currentTranslationsSubject.value;
    
    for (const key of keys) {
      if (value && value[key] !== undefined) {
        value = value[key];
      } else {
        return keyPath; // Return key if translation not found
      }
    }
    
    return value;
  }

  /**
   * Interpolate variables in translation string
   * Example: translate('LANGUAGE_SWITCHER.SWITCH_MESSAGE', { language: 'English' })
   */
  translate(keyPath: string, params?: any): string {
    let translation = this.get(keyPath);
    
    if (params) {
      Object.keys(params).forEach(key => {
        translation = translation.replace(`{{${key}}}`, params[key]);
      });
    }
    
    return translation;
  }
}