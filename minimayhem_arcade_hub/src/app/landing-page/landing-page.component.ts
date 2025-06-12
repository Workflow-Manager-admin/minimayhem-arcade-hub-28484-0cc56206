import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class LandingPageComponent implements OnInit {
  logo = '/assets/logo-mm.png'; // Placeholder; update with actual path.
  navLinks = [
    { label: 'Games', path: '/games' },
    { label: 'Scoreboard', path: '/scoreboard' }
  ];

  hero = {
    title: 'MINIMAYHEM ARCADE HUB',
    slogan: 'Challenge Yourself. Play. Win. Repeat.',
    cta: 'Jump In',
    ctaLink: '/games'
  };

  games = [
    { title: 'Typing Challenge', img: '/assets/typing.png', desc: 'Speed-type your way to glory!' },
    { title: 'Reaction Speed', img: '/assets/reaction.png', desc: 'How quick are you? Find out!' },
    { title: 'Sudoku', img: '/assets/sudoku.png', desc: 'Classic logic fun, arcade-style!' },
    { title: 'Memory Match', img: '/assets/memory.png', desc: 'Sharpen your mind in pixel glory' }
  ];

  // Daily API content (stubs)
  quote: string | null = null;
  joke: string | null = null;
  dailyChallenge: string = 'Typing: Score 200 in 3 minutes!';

  isDarkMode = false;

  ngOnInit(): void {
    this.initDarkModeStub();
    this.fetchApiPlaceholders();
  }

  // PUBLIC_INTERFACE
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    // Stub for browser DOM: Apply/Remove dark-mode class on <body>
    // if (typeof document !== 'undefined') {
    //   const body = document.body;
    //   if (this.isDarkMode) {
    //     body.classList.add('dark-mode');
    //   } else {
    //     body.classList.remove('dark-mode');
    //   }
    // }
    // TODO: Implement localStorage persistence when on browser
  }

  // PUBLIC_INTERFACE: Placeholder stub for fetching API content
  fetchApiPlaceholders(): void {
    // setTimeout simulation for client; fallback for SSR
    // if (typeof window !== 'undefined' && window.setTimeout) {
    //   window.setTimeout(() => {
    //     this.quote = '"The secret of getting ahead is getting started." — Mark Twain';
    //     this.joke = 'Why did the computer show up at work late? It had a hard drive.';
    //   }, 350);
    // } else {
      this.quote = '"The secret of getting ahead is getting started." — Mark Twain';
      this.joke = 'Why did the computer show up at work late? It had a hard drive.';
    // }
  }

  // PUBLIC_INTERFACE
  onCta(): void {
    // Stub for routing: In a real app, navigate to this.hero.ctaLink
    // e.g. router.navigateByUrl(this.hero.ctaLink);
  }

  // PUBLIC_INTERFACE
  onDailyChallengeNavigate(): void {
    // Stub for routing: In a real app, navigate to /daily
    // e.g. router.navigateByUrl('/daily');
  }

  private initDarkModeStub(): void {
    this.isDarkMode = false;
    // For browser: remove dark-mode from <body>
    // if (typeof document !== 'undefined') {
    //   document.body.classList.remove('dark-mode');
    // }
  }
}
