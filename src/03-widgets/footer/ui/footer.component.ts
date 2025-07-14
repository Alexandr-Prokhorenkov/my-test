import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContactsComponent } from './contacts/contacts.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { SupportInfoComponent } from './support-info/support-info.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SupportInfoComponent, FooterNavComponent, ContactsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
