import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainSliderComponent } from '@widgets/main-slider';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MainSliderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {}
