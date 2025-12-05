// src/app/services/language.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslationService } from './translation.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject: BehaviorSubject<string>;
  public currentLanguage$: Observable<string>;

  constructor(private translationService: TranslationService) {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    this.currentLanguageSubject = new BehaviorSubject<string>(savedLanguage);
    this.currentLanguage$ = this.currentLanguageSubject.asObservable();
    
    // Initialize translations
    this.translationService.setLanguage(savedLanguage);
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  setLanguage(language: string): void {
    this.currentLanguageSubject.next(language);
    this.translationService.setLanguage(language);
    localStorage.setItem('preferredLanguage', language);
    console.log('Language changed to:', language);
  }

  getLanguageDisplayName(langCode: string): string {
    return langCode === 'en' ? 'English' : 'Filipino';
  }
}