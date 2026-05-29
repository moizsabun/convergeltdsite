import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageHeader } from '../../shared/page-header/page-header';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, PageHeader],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export default class Contact {
  protected readonly model = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  protected readonly submitted = signal(false);

  protected readonly details = [
    { label: 'Address', value: 'B-37, Block 5, Gulshan-e-Iqbal, Karachi, Pakistan' },
    { label: 'Phone', value: '+92 313 4801967', href: 'tel:+923134801967' },
    { label: 'Email', value: 'hello@converge.tech', href: 'mailto:hello@converge.tech' },
  ];

  onSubmit(valid: boolean): void {
    if (!valid) {
      return;
    }
    // In a real app this would POST to an API; here we confirm receipt.
    this.submitted.set(true);
  }
}
