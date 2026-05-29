import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeader } from '../../shared/page-header/page-header';
import { Icon } from '../../shared/icon/icon';
import { SERVICES } from '../../shared/services.data';

@Component({
  selector: 'app-services',
  imports: [RouterLink, PageHeader, Icon],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export default class Services {
  protected readonly services = SERVICES;
}
