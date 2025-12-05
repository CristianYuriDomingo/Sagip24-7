// src/app/components/language-popover/language-popover.component.ts
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-popover',
  standalone: true, // Make it a standalone component
  imports: [IonicModule, CommonModule], // Import required modules
  template: `
    <div class="language-list">
      <div class="language-option" (click)="selectLanguage('en')">
        <ion-icon name="flag-outline" class="flag-icon"></ion-icon>
        <span class="language-label">English</span>
        <ion-icon name="checkmark" *ngIf="isCurrentLanguage('en')" class="check-icon"></ion-icon>
      </div>
      
      <div class="language-option" (click)="selectLanguage('fil')">
        <ion-icon name="flag-outline" class="flag-icon"></ion-icon>
        <span class="language-label">Filipino</span>
        <ion-icon name="checkmark" *ngIf="isCurrentLanguage('fil')" class="check-icon"></ion-icon>
      </div>
    </div>
  `,
  styles: [`
    .language-list {
      padding: 8px 0;
      margin: 0;
      min-width: 160px;
      background: white;
    }

    .language-option {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      cursor: pointer;
      transition: all 0.2s ease;
      gap: 12px;
      min-height: 44px;
    }

    .language-option:hover {
      background: rgba(220, 18, 18, 0.05);
    }

    .language-option:active {
      background: rgba(220, 18, 18, 0.1);
    }

    .language-label {
      flex: 1;
      font-size: 14px;
      font-weight: 500;
      color: #333;
    }

    .flag-icon {
      color: #dc1212;
      font-size: 20px;
      flex-shrink: 0;
    }

    .check-icon {
      color: #dc1212;
      font-size: 20px;
      flex-shrink: 0;
    }

    .language-option:first-child {
      border-bottom: 1px solid #f0f0f0;
    }

    @media (max-width: 480px) {
      .language-list {
        min-width: 140px;
      }
      
      .language-option {
        padding: 10px 14px;
      }
      
      .language-label {
        font-size: 13px;
      }
    }
  `]
})
export class LanguagePopoverComponent {
  currentLanguage: string = 'en';

  constructor(private popoverController: PopoverController) {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      this.currentLanguage = savedLanguage;
    }
  }

  selectLanguage(language: string) {
    this.popoverController.dismiss({
      language: language
    });
  }

  isCurrentLanguage(language: string): boolean {
    return this.currentLanguage === language;
  }
}