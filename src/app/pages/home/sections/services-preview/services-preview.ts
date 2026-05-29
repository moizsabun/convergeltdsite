import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../../../shared/icon/icon';
import { SERVICES } from '../../../../shared/services.data';

@Component({
  selector: 'app-services-preview',
  imports: [RouterLink, Icon],
  templateUrl: './services-preview.html',
  styleUrl: './services-preview.css',
})
export class ServicesPreview {
  protected readonly services = SERVICES;
}
