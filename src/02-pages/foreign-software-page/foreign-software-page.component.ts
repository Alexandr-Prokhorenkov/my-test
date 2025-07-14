import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-foreign-software-page',
  standalone: true,
  imports: [],
  templateUrl: './foreign-software-page.component.html',
  styleUrl: './foreign-software-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForeignSoftwarePageComponent {}
