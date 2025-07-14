import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgIconComponent } from '@shared/ui';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {}
