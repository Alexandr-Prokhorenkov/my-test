import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-materials-page',
  standalone: true,
  imports: [],
  templateUrl: './materials-page.component.html',
  styleUrl: './materials-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialsPageComponent {}
