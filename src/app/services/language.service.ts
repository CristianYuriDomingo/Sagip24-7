// src/app/services/language.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  // BehaviorSubject to hold and emit the current language
  private currentLanguageSubject: BehaviorSubject<string>;
  public currentLanguage$: Observable<string>;

  constructor() {
    // Initialize with saved language or default to 'en'
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    this.currentLanguageSubject = new BehaviorSubject<string>(savedLanguage);
    this.currentLanguage$ = this.currentLanguageSubject.asObservable();
  }

  /**
   * Get the current language value
   */
  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  /**
   * Set a new language and notify all subscribers
   */
  setLanguage(language: string): void {
    this.currentLanguageSubject.next(language);
    localStorage.setItem('preferredLanguage', language);
    console.log('Language changed to:', language);
  }

  /**
   * Get the display name for a language code
   */
  getLanguageDisplayName(langCode: string): string {
    return langCode === 'en' ? 'English' : 'Filipino';
  }
}