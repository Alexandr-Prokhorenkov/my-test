import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-component-database-page',
  standalone: true,
  imports: [],
  templateUrl: './component-database-page.component.html',
  styleUrl: './component-database-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentDatabasePageComponent {}
