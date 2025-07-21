import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MAIN_SLIDER_DATA } from '@shared/config/sliders/main-slider.config';
import { SliderComponent } from '@shared/ui';

@Component({
  selector: 'app-materials-page',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './materials-page.component.html',
  styleUrl: './materials-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialsPageComponent {
  public readonly sliderData = [MAIN_SLIDER_DATA[3]];
}
