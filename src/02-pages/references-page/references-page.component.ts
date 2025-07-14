import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-references-page',
  standalone: true,
  imports: [],
  templateUrl: './references-page.component.html',
  styleUrl: './references-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferencesPageComponent {}
