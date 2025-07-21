import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MAIN_SLIDER_DATA } from '@shared/config';
import { SliderComponent } from '@shared/ui';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent {
  public readonly sliderData = [MAIN_SLIDER_DATA[0]];
}
