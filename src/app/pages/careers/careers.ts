import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeader } from '../../shared/page-header/page-header';

interface Job {
  title: string;
  type: string;
  location: string;
  tags: string[];
}

@Component({
  selector: 'app-careers',
  imports: [RouterLink, PageHeader],
  templateUrl: './careers.html',
  styleUrl: './careers.css',
})
export default class Careers {
  protected readonly perks = [
    'Flexible & hybrid work',
    'Learning budget',
    'Competitive pay',
    'Health coverage',
    'Modern tooling',
    'Real ownership',
  ];

  protected readonly jobs: Job[] = [
    { title: 'Senior Frontend Engineer', type: 'Full-time', location: 'Karachi / Remote', tags: ['Angular', 'TypeScript'] },
    { title: 'Backend Engineer', type: 'Full-time', location: 'Karachi / Remote', tags: ['Node.js', 'Cloud'] },
    { title: 'VoIP Engineer', type: 'Full-time', location: 'On-site', tags: ['Asterisk', 'SIP'] },
    { title: 'Digital Marketing Specialist', type: 'Full-time', location: 'Karachi', tags: ['SEO', 'Content'] },
  ];
}
