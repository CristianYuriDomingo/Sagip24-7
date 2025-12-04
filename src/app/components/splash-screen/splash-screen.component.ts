import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  standalone: true,
  imports: [LottieComponent]
})
export class SplashScreenComponent implements OnInit {
  
  options: AnimationOptions = {
    path: 'assets/animations/welcome.json',
    loop: false,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'none' // This goes in TypeScript, not CSS!
    }
  };

  constructor() { }

  ngOnInit() {}

  animationCreated(animationItem: AnimationItem): void {
    console.log('Animation loaded successfully!');
  }

  complete(): void {
    console.log('Animation completed!');
  }
}