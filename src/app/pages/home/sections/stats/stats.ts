import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  protected readonly stats = [
    { value: '150+', label: 'Projects delivered' },
    { value: '12+', label: 'Years of experience' },
    { value: '60+', label: 'Happy clients' },
    { value: '24/7', label: 'Support coverage' },
  ];
}
