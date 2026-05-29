import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeader } from '../../shared/page-header/page-header';

@Component({
  selector: 'app-about',
  imports: [RouterLink, PageHeader],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export default class About {
  protected readonly values = [
    { title: 'Client first', text: 'Your goals drive every decision we make.' },
    { title: 'Quality always', text: 'We hold our work to a high engineering standard.' },
    { title: 'Honest partnership', text: 'Clear communication and no surprises.' },
    { title: 'Always learning', text: 'We adopt the right tools and stay ahead of the curve.' },
  ];
}
