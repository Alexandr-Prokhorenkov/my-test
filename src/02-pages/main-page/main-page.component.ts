import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MAIN_SLIDER_DATA } from '@shared/config';
import { SliderComponent } from '@shared/ui';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
  public readonly sliderData = MAIN_SLIDER_DATA;
}
