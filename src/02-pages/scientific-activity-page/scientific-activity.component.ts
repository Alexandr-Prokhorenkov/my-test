import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-scientific-activity',
  standalone: true,
  imports: [],
  templateUrl: './scientific-activity.component.html',
  styleUrl: './scientific-activity.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScientificActivityPageComponent {}
