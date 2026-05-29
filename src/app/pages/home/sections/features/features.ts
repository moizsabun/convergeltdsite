import { Component } from '@angular/core';

interface Feature {
  title: string;
  text: string;
  icon: string;
}

@Component({
  selector: 'app-features',
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
  protected readonly features: Feature[] = [
    {
      title: 'Premium quality',
      text: 'Clean, tested and maintainable engineering — built to standards, not shortcuts.',
      icon: 'M12 3l8 3v6c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V6l8-3Z',
    },
    {
      title: 'Reliable delivery',
      text: 'Transparent timelines and proactive communication keep your project on track.',
      icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3',
    },
    {
      title: 'Affordable pricing',
      text: 'Enterprise-grade outcomes at a price that fits ambitious budgets.',
      icon: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
    },
    {
      title: '24/7 support',
      text: 'A dedicated team on call to keep your systems running smoothly.',
      icon: 'M12 6v6l4 2M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z',
    },
  ];
}
