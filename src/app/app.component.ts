import { Component } from '@angular/core';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showSplash = true;

  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    // Hide splash after 3 seconds
    setTimeout(() => {
      this.showSplash = false;
    }, 3000);
  }
}