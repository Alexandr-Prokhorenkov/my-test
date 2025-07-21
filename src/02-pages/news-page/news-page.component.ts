import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MAIN_SLIDER_DATA } from '@shared/config';
import { SliderComponent } from '@shared/ui';

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsPageComponent {
  public readonly sliderData = [MAIN_SLIDER_DATA[2]];
}
