import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-our-projects',
  standalone: true,
  imports: [],
  templateUrl: './our-projects.component.html',
  styleUrl: './our-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurProjectsPageComponent {}
