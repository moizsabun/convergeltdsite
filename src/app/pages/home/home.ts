import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { ServicesPreview } from './sections/services-preview/services-preview';
import { Features } from './sections/features/features';
import { Stats } from './sections/stats/stats';
import { Cta } from './sections/cta/cta';

@Component({
  selector: 'app-home',
  imports: [Hero, ServicesPreview, Features, Stats, Cta],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {}
